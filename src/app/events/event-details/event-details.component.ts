import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { IEvent, ISession } from "../shared";
import { EventsService } from "../shared/events.service";

@Component({
    selector:'event-details',
    templateUrl:"./event-details.component.html",
    styles:[`
        .container{padding-left:20px; padding-right:20px}
        .event-image{height:100px}
        a {cursor:pointer}
    `]
})
export class EventDetailsComponent implements OnInit{
    event:IEvent | any ;
    addMode?:boolean;
    filterBy:string='all';
    sortBy:string = 'votes';

    constructor(private eventService: EventsService, private route:ActivatedRoute){}

    ngOnInit(): void {

        this.route.data.forEach((data)=>{
            this.event = data['event'];
               this.addMode=false;
        })
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null, this.event?.sessions.map((s:{id:number})=>s.id));
        session.id = nextId + 1;
        this.event?.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode=false;
    }

    cancelAddSession(){
        this.addMode=false;
    }
}