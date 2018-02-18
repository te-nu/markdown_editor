export class IndexStore {

    // state
    private text: string;
    
    constructor(text: string = "") {
        this.mutateText(text);
    }

    // actions
    public inputText(value): void {
        // APIを叩く処理はここに入れる
        this.mutateText(value); // commit
    }

    // mutation
    public mutateText(value): void {
        this.text = value; // mutate
    }
}