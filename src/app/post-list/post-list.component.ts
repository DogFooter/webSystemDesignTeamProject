import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { SearchListParams } from '../search-list-params';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
    providers: [ PostService ]

})
export class PostListComponent implements OnInit, OnChanges {

    @Input() listParams: SearchListParams;

    posts: Post[];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.getPosts();
    }

    ngOnChanges(change: SimpleChanges) {
        this.getPosts();
    }

    getPosts() {
        this.postService.getPosts(this.listParams.query).subscribe(
            posts => this.posts = posts
        );
    }

}
