<template lang="pug">
    textarea(ref="inputArea" v-model="text")
</template>

<script lang="ts">
import Vue from 'vue';
import {Observable} from 'rxjs/Rx';
import {Component, Prop} from "vue-property-decorator"
import {IndexStore} from "../stores/indexStore"

@Component({})
export default class WriteArea extends Vue {
    @Prop()
    private store_: IndexStore;

    private text: string = "";

    mounted(){
        Observable.fromEvent(<HTMLElement>this.$refs.inputArea, 'input').subscribe((event) => {
            this.store_.inputText(event['target'].value);
        });
        this.store_.onChangedText.subscribe((text) => {
            this.text = text;
        });
    }
}
</script>