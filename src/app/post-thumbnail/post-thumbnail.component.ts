import { Component, OnInit, Input } from '@angular/core';
import { PostStuff } from '../post-stuff';
import { Post } from '../post';

@Component({
    selector: 'app-post-thumbnail',
    templateUrl: './post-thumbnail.component.html',
    styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {
    @Input()
    post: Post;

    constructor() { }

    ngOnInit() {
    }

}
