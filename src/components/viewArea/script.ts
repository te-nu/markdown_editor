import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator"
import {IndexStore} from "../../stores/indexStore"
import marked from "marked"

@Component({
    filters: {
        markdown: (text) => {
            return marked(text);
        }
    }
})
export default class ViewArea extends Vue {
    @Prop()
    private store_: IndexStore;
}