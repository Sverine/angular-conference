import { Component, Input, OnChanges } from "@angular/core";
import { AuthService } from "src/app/user/auth.service";
import { ISession } from "../shared";
import { VoterService } from "./voter.service";

@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html',
})
export class SessionListComponent implements OnChanges{
    @Input() eventId?: number;
    @Input() sessions?: ISession[];
    @Input() filterBy?:string;
    @Input() sortBy?:string;
    visibleSessions?:ISession[] = [];
    constructor(public auth:AuthService, private voterService:VoterService){}

    ngOnChanges(): void {
        if (this.sessions){
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? 
                this.visibleSessions?.sort(this.sortByNameAsc)
                : this.visibleSessions?.sort(this.sortByVotesDesc);
        }
    }

    toggleVote(session:ISession){
        if(this.userHasVoted(session)){
            this.voterService.deleteVoter(session,this.auth.currentUser.userName, this.eventId)
        }else{
            this.voterService.addVoter(session, this.auth.currentUser.userName, this.eventId)
        }
        if(this.sortBy === 'votes'){
            this.visibleSessions?.sort(this.sortByVotesDesc);
        }
    }

    userHasVoted(session:ISession):boolean|void{
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }

    filterSessions(filter?:string){
        if (filter === 'all'){
            this.visibleSessions = this.sessions
        }else{
            this.visibleSessions = this.sessions?.filter(session=>{
                return session.level.toLocaleLowerCase() === filter;
            })
        }
    }
    sortByNameAsc(s1:ISession, s2:ISession){
        if(s1.name>s2.name) return 1
        else if(s1.name === s2.name) return 0;
        else return -1
    }

    sortByVotesDesc(s1:ISession, s2:ISession){
        return s2.voters.length - s1.voters.length
    }
}
