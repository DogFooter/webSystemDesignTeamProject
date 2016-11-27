import { Component, OnInit, Input, Output, EventEmitter, trigger, style, transition, animate } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapMarker } from '../map-marker';

@Component({
    selector: 'app-writing-panel',
    templateUrl: './writing-panel.component.html',
    styleUrls: ['./writing-panel.component.css'],
})
export class WritingPanelComponent implements OnInit {

    @Input()
    show: boolean;
    @Input() markerValue: MapMarker;
    @Input() marker_index: number;
    @Output("marker_content") markerContentEvent: EventEmitter<MapMarker> = new EventEmitter();
    @Output("marker_delete") markerDeleteEvent: EventEmitter<number> = new EventEmitter();

    constructor() { 
    }

    ngOnInit() {
        this.sendContent();
    }
    sendContent() {
        this.markerContentEvent.emit(this.markerValue);
    }
    marker_delete() {
        this.markerDeleteEvent.emit(this.marker_index);
    }

}
