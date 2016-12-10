import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent, LatLngLiteral } from 'angular2-google-maps/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
    selector: 'app-read-post',
    templateUrl: './read-post.component.html',
    styleUrls: ['./read-post.component.css'],
    providers: [PostService]
})
export class ReadPostComponent implements OnInit {

    postNumber: number;
    post: Post;
    currentWatchMarker: number[];
    total_budget: number;

    get totalBudget() {
        var sum = 0;
        for(var i=0; i < this.post.markers.length; i++) {
            for (var j=0; j<5; j++) {
                sum += this.post.markers[i].budget[j];
            }
        }
        return sum;
    }


    constructor(private postService: PostService, private router: Router) {
        var s = window.location.href.split('/');

        this.currentWatchMarker = null;
        this.postNumber = parseInt(s[s.length-1]);
    } 

    ngOnInit() {
        this.getPost() 
    }

    getPost() {
        this.postService.getPost(this.postNumber).subscribe(
            post =>( this.post = post  )&&( this.currentWatchMarker = post.markers[0].pos)
        );
    }

    delPost() {
        this.postService.delPost(this.postNumber).subscribe(
            data => data.error ? alert(data.error) : this.router.navigate(['/main'])
        );
    }


}
