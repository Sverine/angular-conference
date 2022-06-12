import { Component } from "@angular/core";
import { EventsService, ISession } from "../events";
import { AuthService } from "../user/auth.service";

@Component({
    selector:"nav-bar",
    templateUrl:'nav-bar.component.html',
    styles:[`
        .nav.navbar-nav {font-size:15px}
        #searchForm {margin-right:100px}
        li>a.active {color:#F97924}
        @media (max-width:1200px){#searchForm{display:none}}
    `]
})
export class NavBarComponent{
    constructor(public authService:AuthService, private eventService:EventsService){}
    searchTerm:string = '';
    foundSessions?:any;

    searchSessions(searchTerm:string){
        this.eventService.searchSessions(searchTerm).subscribe(
            (sessions?:ISession[])=>{
                this.foundSessions = sessions;
            }
        )
    }
}