import { BehaviorSubject, Subject, Observable } from 'rxjs';

export class IndexStore {

    // mutation
    private changeTextSubject_: BehaviorSubject<string> = new BehaviorSubject("");

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
        this.changeTextSubject_.next(this.text); // render
    }

    public get onChangedText(): Observable<string> {
        return this.changeTextSubject_.asObservable();
    }
}