export class MapMarker {

    pos: number[];
    title: String;
    content: String;
    budget: number[];

    constructor(pos: number[], title: String, content: String, budget: number[]) {
        this.pos = pos;
        this.content = content;
        this.title = title;
        this.budget = budget;
    }
}
