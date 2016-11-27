export class MapMarker {

    id: number;
    pos: number[];
    title: String;
    content: String;
    budget: number[];

    constructor( id: number,pos: number[], title: String, content: String, budget: number[]) {
        this.pos = pos;
        this.content = content;
        this.title = title;
        this.id = id;
        this.budget = budget;
    }
}
