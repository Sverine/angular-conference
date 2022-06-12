import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { map } from "rxjs";
import { EventsService } from "./shared/events.service";

@Injectable()
export class EventResolver implements Resolve<any>{

    constructor(private eventService: EventsService){}

    resolve(route:ActivatedRouteSnapshot){
        // return this.eventService.getEvents().subscribe(events=>events)
        return this.eventService.getEvent(route.params['id'])//.pipe(map(events=>events))
    }
}