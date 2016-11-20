import { Component, OnInit } from '@angular/core';
import { LOC_MOK } from '../location-mock';

@Component({
    selector: 'app-search-pannel',
    templateUrl: './search-pannel.component.html',
    styleUrls: ['./search-pannel.component.css']
})
export class SearchPannelComponent implements OnInit {

    locations: String[] = LOC_MOK;
    selectedNation: String;

    constructor() {
        this.selectedNation = this.locations[0]
    }


    ngOnInit() {
    }

}
