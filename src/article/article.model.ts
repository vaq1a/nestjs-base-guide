export class Article {
    constructor (title: string, content: string, id?: number) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    id: number;

    title: string;

    content: string;
}