import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { SearchListParams } from '../search-list-params';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    listParams: SearchListParams;
    mainListParams: SearchListParams = {
        query: '',
        heading: '최근 등록 된 여행'
    }

    constructor() { }

    ngOnInit() {
    }

    logParams($event: SearchListParams) {
        this.listParams = null;
        console.log($event);

        this.listParams = $event;
    }
}
