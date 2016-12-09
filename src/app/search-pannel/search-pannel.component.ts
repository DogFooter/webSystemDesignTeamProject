import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LOC_MOK} from '../location-mock-for-search';
import { SearchListParams } from '../search-list-params';

@Component({
    selector: 'app-search-pannel',
    templateUrl: './search-pannel.component.html',
    styleUrls: ['./search-pannel.component.css']
})
export class SearchPannelComponent implements OnInit {

    @Output('searchParams') searchEventEmitter: EventEmitter<SearchListParams> = new EventEmitter();

    locations: String[] = LOC_MOK;
    day_list: String[] = [];

    search_inform: String[]; 
    selectedNation: String;
    selectedDuration:String ;


    constructor() {
        this.selectedNation = this.locations[0]
        this.day_list[0] = "날짜 선택"
        for (let i = 1; i <= 30; i++){
            this.day_list[i] = i + '';
        }
        this.selectedDuration = this.day_list[0];


    }

    submitFind() {
        var query = '';
        if (this.selectedNation != this.locations[0]) { 
            query = query + 'nation=' + this.selectedNation;
        }
        if (this.selectedDuration != this.day_list[0]) {
            if (query == '') { 
                query = query + 'duration=' + this.selectedDuration;
            }
            else { 
                query = query + '&duration=' + this.selectedDuration;
            }
        }
        var listParams =  new SearchListParams(query, '찾으신 여행');

        console.log('in search com:' + JSON.stringify(listParams) )

        this.searchEventEmitter.emit(listParams);

    }

    ngOnInit() {
    }

}
