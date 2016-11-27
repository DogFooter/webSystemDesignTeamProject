import { Component, OnInit } from '@angular/core';
import { MouseEvent, LatLngLiteral } from 'angular2-google-maps/core';
import { MapMarker } from '../map-marker';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'app-write-post',
    templateUrl: './write-post.component.html',
    styleUrls: ['./write-post.component.css'],
    providers: [ PostService ]
})
export class WritePostComponent implements OnInit {

    currentPost: Post;

    show_writing: boolean = false;
    marker_number: number = 0;
    currentMarker: MapMarker;
    currentMarkerIndex: number;
    markers: MapMarker[] = [];
    total_budget: number = 0;
    constructor(private postService: PostService) {

        this.currentMarkerIndex = 0;
        this.currentMarker = new MapMarker(-1, [0,0],"","", [0,0,0,0,0]);
        this.currentPost = new Post("", "","dogfooter","",-1 , []);
    }


    ngOnInit() {
    }

    submitPost() {
        this.currentPost.markers = this.markers;
        console.log(this.postService.addPost(this.currentPost));
    }

    mapClicked($event: MouseEvent) {
        this.pos = [ $event.coords.lat, $event.coords.lng ];
        this.paths[this.paths.length] = {lat: this.pos[0], lng: this.pos[1]};
        this.show_writing = true;
        let tmpMarker = new MapMarker(this.marker_number, this.pos, "", "", [0,0,0,0,0]);
        this.markers[this.marker_number] = tmpMarker;
        this.currentMarker = this.markers[this.marker_number];
        this.currentMarkerIndex = this.marker_number;
        this.marker_number++;
        console.log(this.paths);
    }

    onShowUpdate($event: boolean) {
        this.show_writing = $event.valueOf();
    }

    markerClicked(i: number) {
        this.currentMarker = this.markers[i];
        this.currentMarkerIndex = i;
        console.log(this.currentMarker);
    }
    markerUpdate($event: MapMarker) {
        this.currentMarker = $event;
        this.total_budget = 0;
        for (var i = 0; i < this.markers.length; i++) {
            this.total_budget += this.markers[i].budget[0];
        }
    }
    markerDelete($event: number) {
        console.log("delete :: " + $event + " number ");
        this.markers.splice($event, 1);
        this.paths.splice($event, 1);
        if (this.markers.length > 0) {
            this.currentMarker = this.markers[0];
            this.currentMarkerIndex = 0;
            this.marker_number--;
        }
        else {
            this.marker_number = 0;
            this.currentMarkerIndex = 0;
            this.currentMarker = new MapMarker(-1, [0,0],"","", [0,0,0,0,0]);
        }

    }

    pos: number[] = [35,127];

    paths: Array<LatLngLiteral> = [];

}
