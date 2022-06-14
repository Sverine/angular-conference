import { VoterService } from "./voter.service";
import { ISession } from "../shared";
import { of } from "rxjs";

describe('VoterService',()=>{
    let voterService : VoterService;
    let mockHttp;
    let session;
    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj('mockHttp',['delete','post'])
        voterService = new VoterService(mockHttp);
    })

    describe('deleteVoter',()=>{
        beforeEach(()=>{})
        it('should remove the voter from the list of voters',()=>{
            session = {id:6, voters:["joe","john"]}
            mockHttp.delete.and.returnValue(of(false))
            expect(session.voters.length).toBe(2);
            voterService.deleteVoter(<ISession>session,"joe", 3); 
            
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        })
        
        it('should call the http.delete with the right URL',()=>{
            session = {id:6, voters:["joe","john"]}
            mockHttp.delete.and.returnValue(of(false))

            voterService.deleteVoter(<ISession>session,"joe", 3); 

            expect(mockHttp.delete).toHaveBeenCalledWith(`/api/events/3/sessions/${session.id}/voters/joe`)
        })
    })
    
    describe('addVoter',()=>{
        it('should call the http.post with the right URL',()=>{
            session = {id:6, voters:["john"]}
            mockHttp.post.and.returnValue(of(false))
    
            voterService.addVoter(<ISession>session,"joe", 3); 
    
            expect(mockHttp.post).toHaveBeenCalledWith(`/api/events/3/sessions/${session.id}/voters/joe`,{},jasmine.any(Object))
        })
    })
})