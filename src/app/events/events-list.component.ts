import { Component, OnInit } from "@angular/core";
import { EventsService } from "./shared/events.service";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from "@angular/router";
import { IEvent } from "./shared";


@Component({
    template:`
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail  #thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit{
  constructor(private eventService:EventsService, private toastr: ToastrService, private route:ActivatedRoute, private router:Router){
  }
  events!: IEvent[];
  
  ngOnInit(){
    this.events = this.route.snapshot.data['events'];
  }
  
  // handleThumbnailClick(eventName:any){
  //   this.toastr.success(eventName, '');
  // }
}