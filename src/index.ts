import WriteArea from "./components/writeArea.vue"
import ViewArea from "./components/viewArea.vue"
import Vue from "vue";
import {Component} from "vue-property-decorator"
import { IndexStore } from "./stores/indexStore";

@Component({
    components: {
        WriteArea,
        ViewArea,
    }
})
class RootComponent extends Vue {
    private store_: IndexStore = new IndexStore();
}

window.onload = (() => {
    new RootComponent({
        el: ".main",
    })
})