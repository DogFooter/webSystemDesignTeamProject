import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LOC_MOK} from '../location-mock';

@Component({
    selector: 'app-write-post-header',
    templateUrl: './write-post-header.component.html',
    styleUrls: ['./write-post-header.component.css']
})
export class WritePostHeaderComponent implements OnInit {

    @Output("postDuration") durationEvent: EventEmitter<number> = new EventEmitter();
    @Output("postNation") nationEvent: EventEmitter<String> = new EventEmitter();

    locations: String[] = LOC_MOK;
    day_list: number[] = [];

    search_inform: String[];

    selectedNation: String;
    selectedDuration: number;


    constructor() {
        this.selectedNation = this.locations[0]
        for (let i = 0; i < 30; i++){
            this.day_list[i] = i+1;
        }
        this.selectedDuration = this.day_list[0]; 
    }

    sendDuration() {
        this.durationEvent.emit(this.selectedDuration);
    }

    sendNation() {
        this.nationEvent.emit(this.selectedNation);
    }



    ngOnInit() {
        this.sendDuration();
        this.sendNation();
    }

}
