import { Component, Input } from "@angular/core";
import { IEvent } from "./shared";

@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>Date : {{event.date | date:'d-M-y'}}</div>
        <div>Time : {{event.time}}</div>
        <div [ngSwitch]="event.time" [ngClass]="getStartTimeClass()">
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div>Price : {{event.price | currency:'EUR'}}</div>
        <div *ngIf="event.location">
            <!-- can be replace by <div [hidden]="!event.location"> -->
            <span>Location :{{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div *ngIf="!event?.onlineUrl">
            Online URL : {{event.onlineUrl}}
        </div>
    </div>
    `,
    styles:[`
        .bold{font-weight:900}
        .green{color:green !important}
        .thumbnail {min-height:210px}
        .pad-left{margin-left:10px;}
        .well div{color:#bbb;}
    `]
})
export class EventThumbnailComponent {
    @Input() event!: IEvent;
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green:isEarlyStart, bold:isEarlyStart}
    }
}