import { Component, OnInit } from '@angular/core';
import { PostStuff } from '../post-stuff';
import { POST_MOCK } from '../post_mock';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    post_list: PostStuff[];

    constructor() {
        this.post_list = POST_MOCK;
    }

  ngOnInit() {
  }

}
