import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator"
import {IndexStore} from "../../stores/indexStore"

@Component({})
export default class WriteArea extends Vue {
    @Prop()
    private store_: IndexStore;
}