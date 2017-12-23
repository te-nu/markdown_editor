<template lang="pug">
    div(v-html="text")
</template>

<script lang="ts">
import Vue from 'vue';
import {Observable} from 'rxjs/Rx';
import {Component, Prop} from "vue-property-decorator"
import {IndexStore} from "../stores/indexStore"
import marked from "marked"

@Component({})
export default class ViewArea extends Vue {
    @Prop()
    private store_: IndexStore;

    private text: string = "";

    created(){
        this.store_.onChangedText.map((text) => {
            return marked(text)
        }).subscribe((text) => {
            this.text = text;
        });
    }
}
</script>