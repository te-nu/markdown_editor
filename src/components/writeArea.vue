<template lang="pug">
    div
        textarea(ref="inputArea" v-model="text")
        input(type="submit" @click="store_.submit()")
</template>

<script lang="ts">
import Vue from 'vue';
import {Observable} from 'rxjs/Rx';
import {Component, Prop} from "vue-property-decorator"
import {IndexStore} from "../stores/indexStore"
import {Article} from '../data/article';

@Component({})
export default class WriteArea extends Vue {
    @Prop()
    private store_: IndexStore;

    private text: string = "";

    mounted(){
        Observable.fromEvent(<HTMLElement>this.$refs.inputArea, 'input').subscribe((event) => {
            this.store_.inputText(event['target'].value);
        });
        this.store_.onChangedText.subscribe((article: Article) => {
            this.text = article.content;
        });
    }
}
</script>