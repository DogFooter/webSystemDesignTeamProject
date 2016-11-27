import { MapMarker } from './map-marker';

export class Post {

    constructor(public title:String, public hint: String, public author: String,public nation: String, public duration: number, public markers: MapMarker[] ) {}

}
