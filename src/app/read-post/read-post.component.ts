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

    @Input() postNumber: number;
    post: Post;

    constructor(private postService: PostService) {
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
