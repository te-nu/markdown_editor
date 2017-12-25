import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Article } from '../data/article';

export class IndexStore {

    // mutation and state
    private changeTextSubject_: BehaviorSubject<Article> = new BehaviorSubject(new Article());

    constructor(text: string = "") {
        this.mutateText(text);
    }

    // actions
    public inputText(value): void {
        // APIを叩く処理はここに入れる
        this.mutateText(value); // commit
    }

    // 仮置きの保存処理
    public submit(): void {
        alert(this.changeTextSubject_.getValue().content + "was send.")
    }

    // mutation and state
    public mutateText(value: string): void {
        var article = this.changeTextSubject_.getValue();
        article.content = value;
        this.changeTextSubject_.next(article); // render
    }

    public get onChangedText(): Observable<Article> {
        return this.changeTextSubject_.asObservable();
    }
}