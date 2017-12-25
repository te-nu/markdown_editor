<template lang="pug">
    div(v-html="text")
</template>

<script lang="ts">
import Vue from 'vue';
import {Observable} from 'rxjs/Rx';
import {Component, Prop} from "vue-property-decorator"
import {IndexStore} from "../stores/indexStore"
import {Article} from '../data/article';
import marked from "marked"

@Component({})
export default class ViewArea extends Vue {
    @Prop()
    private store_: IndexStore;

    private text: string = "";

    created(){
        this.store_.onChangedText.map((article: Article) => {
            return marked(article.content)
        }).subscribe((text) => {
            this.text = text;
        });
    }
}
</script>