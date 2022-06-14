import { SessionListComponent } from "./session-list.component";
import { ISession } from "../shared";

describe('SessionListComponent',()=>{
    let component:SessionListComponent;
    let mockAuth, mockVoterService;

    beforeEach(()=>{
        component = new SessionListComponent(mockAuth, mockVoterService);
    })

    describe('ngOnChanges',()=>{
        it('should filter the session correclty', ()=>{
            component.sessions = <ISession[]>[
                {name:'session 1',level:'intermediate' },
                {name:'session 2',level:'beginner' },
                {name:'session 3',level:'expert' },
            ]
            component.filterBy ="intermediate";
            component.sortBy ="name";

            component.ngOnChanges();

            expect(component.visibleSessions.length).toEqual(1);
        })
        it('should filter the session with all', ()=>{
            component.sessions = <ISession[]>[
                {name:'session 1',level:'intermediate' },
                {name:'session 3',level:'beginner' },
                {name:'session 2',level:'expert' },
            ]
            component.filterBy ="all";
            component.sortBy ="name";

            component.ngOnChanges();

            expect(component.visibleSessions[2].name).toBe('session 3');
        })
    })
})