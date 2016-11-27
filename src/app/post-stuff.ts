export class PostStuff {
    title: String;
    hint: String;
    thumbnail_url: String;
    author: String;
    duration: number;

    tag: String[];

    constructor (title: String, hint: String, t_url: String, author: String, duration: number ) {
        this.title = title;
        this.hint = hint;
        this.thumbnail_url = t_url;

        this.author =  author;
        this.duration = duration;

    }
}
