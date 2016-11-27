import { Component, OnInit, Input, Output, EventEmitter, trigger, style, transition, animate } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-writing-panel',
    templateUrl: './writing-panel.component.html',
    styleUrls: ['./writing-panel.component.css'],
    animations: [
        trigger(
            'panel_fade', [
                transition(':enter', [
                    style({transform: 'translateX(100%)', opacity: 0}),
                    animate('500ms', style({transform: 'translateX(0)', opacity: 1})),

                ]),
                transition(':leave', [
                    style({transform: 'translateX(0)', opacity: 1}),
                    animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))

                ])
            ]
        ) 
    ]

})
export class WritingPanelComponent implements OnInit {

    @Input()
    show: boolean;

    @Output()
    showUpate: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor() {

    }

    ngOnInit() {
    }

    addMark() {
        this.show = !this.show;
        this.showUpate.emit(this.show)
    }

}
