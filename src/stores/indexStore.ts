export class IndexStore {

    // state
    private text: string;
    
    constructor(text: string = "") {
        this.mutateText(text);
    }

    // actions
    public inputText(value): void {
        this.mutateText(value); // commit
    }

    // mutation
    public mutateText(value): void {
        this.text = value; // mutate
    }
}