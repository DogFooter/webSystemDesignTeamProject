import { Component, OnInit } from '@angular/core';
import { MouseEvent, LatLngLiteral } from 'angular2-google-maps/core';
import { MapMarker } from '../map-marker';
import { Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

import { NationService } from '../nation.service';

@Component({
    selector: 'app-write-post',
    templateUrl: './write-post.component.html',
    styleUrls: ['./write-post.component.css'],
    providers: [ PostService, NationService ]
})
export class WritePostComponent implements OnInit {

    currentPost: Post;

    pos: number[] = [];
    show_writing: boolean = false;
    marker_number: number = 0;
    currentMarker: MapMarker;
    currentMarkerIndex: number;
    markers: MapMarker[] = [];
    total_budget: number = 0;
    constructor(private postService: PostService, private router: Router, private nationService: NationService) {

        this.currentMarkerIndex = 0;
        this.currentMarker = new MapMarker([0,0],"","", [0,0,0,0,0]);
        this.currentPost = new Post("", "","dogfooter","",-1 , []);
        this.pos = [0,0];
    }


    ngOnInit() {
    }

    getNation(nation: string){
        this.currentPost.nation = nation;
        this.getGeoByNation(nation);
        console.log("change geo to ", nation)
    }

    getGeoByNation(nation: string) {
        console.log("change geo to ", nation)
        this.nationService.getGeoByNation(nation).subscribe(
            // data => console.log(data) && (this.pos = [data.geonames[0].lat, data.geonames[0].lng])
            data =>(this.pos[0] = data.lat) && (this.pos[1] =data.lng)  
            // data => (this.pos[0] = 37 ) && (this.pos[1] =127) 
        );

    }

    submitPost() {
        this.currentPost.markers = this.markers;
        console.log(this.currentPost);
        this.postService.addPost(this.currentPost).subscribe(
            data => data.error ? alert(data.error) : this.router.navigate(['/main']) 
        );
        
        
    }

    mapClicked($event: MouseEvent) {
        this.pos = [ $event.coords.lat, $event.coords.lng ];
        this.paths[this.paths.length] = {lat: this.pos[0], lng: this.pos[1]};
        this.show_writing = true;
        let tmpMarker = new MapMarker(this.pos, "", "", [0,0,0,0,0]);
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
            this.currentMarker = new MapMarker([0,0],"","", [0,0,0,0,0]);
        }

    }


    paths: Array<LatLngLiteral> = [];

}
