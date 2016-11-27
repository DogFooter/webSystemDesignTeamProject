import {Component, OnInit} from '@angular/core';
import {LOC_MOK} from '../location-mock';

@Component({
    selector: 'app-search-pannel',
    templateUrl: './search-pannel.component.html',
    styleUrls: ['./search-pannel.component.css']
})
export class SearchPannelComponent implements OnInit {

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


    ngOnInit() {
    }

}
