import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent, LatLngLiteral } from 'angular2-google-maps/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
    selector: 'app-read-post',
    templateUrl: './read-post.component.html',
    styleUrls: ['./read-post.component.css'],
    providers: [PostService]
})
export class ReadPostComponent implements OnInit {

    postNumber: number;
    post: Post;


    constructor(private postService: PostService) {
        var s = window.location.href.split('/');

        this.postNumber = parseInt(s[s.length-1]);
    } 

    ngOnInit() {
        this.getPost() 
    }

    getPost() {
        this.postService.getPost(this.postNumber).subscribe(
            post => this.post = post 
        );
    }


}
