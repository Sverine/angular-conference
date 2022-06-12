import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventsService } from "./shared";

@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
        em{float:right; color:#E05C65; padding-left:10px;}
        .error input {background-color:#E3C3C5}
    `]
})
export class CreateEventComponent{
    constructor(private router:Router, private eventService:EventsService){}

    isDirty:boolean = true;
    newEvent:any
    cancel(){
        this.router.navigate(['/events/'])
    }
    
    saveEvent(formValues:any){
        this.eventService.saveEvent(formValues).subscribe(()=>{
            this.router.navigate(['/events/']);
            this.isDirty = false;

        });
    }
}