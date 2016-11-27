import { Component, OnInit } from '@angular/core';
import { MouseEvent, LatLngLiteral } from 'angular2-google-maps/core';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {

    pos: number[] = [35,127];
    
    paths: Array<LatLngLiteral> = [];
    constructor() {

    }

    ngOnInit() {
    }

    mapClicked($event: MouseEvent) {
        this.pos = [ $event.coords.lat, $event.coords.lng ];
        this.paths[this.paths.length] = {lat: this.pos[0], lng: this.pos[1]};
        console.log(this.paths);
    }

}
