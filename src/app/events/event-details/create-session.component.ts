import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession, restrictedWords } from "../shared";

@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles:[`
        em{float:right; color:#E05C65; padding-left:10px;}
        .error input {background-color:#E3C3C5}
    `]
})
export class CreateSessionComponent implements OnInit{

    @Output() saveNewSession:EventEmitter<ISession> = new EventEmitter();
    @Output() cancelAddSession:EventEmitter<null> = new EventEmitter();

    newSessionForm!:FormGroup;
    name!:FormControl;
    presenter!:FormControl;
    duration!:FormControl;
    level!:FormControl;
    abstract!:FormControl;

    ngOnInit(): void {
        this.name = new FormControl('',Validators.required);
        this.presenter = new FormControl('',Validators.required);
        this.duration = new FormControl('',Validators.required);
        this.level = new FormControl('',Validators.required);
        this.abstract = new FormControl('',[Validators.required, Validators.maxLength(400)]);
        // this.abstract = new FormControl('',[Validators.required, Validators.maxLength(400), restrictedWords(['foo','bar'])]);

        this.newSessionForm = new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract,
        })
    }


    saveSession(formValues:ISession):void{
        let session:ISession={
            name: formValues.name,
            presenter: formValues.presenter,
            duration: Number(formValues.duration),
            level: formValues.level,
            abstract: formValues.abstract,
            id: undefined,
            voters: []
        }
        this.saveNewSession.emit(session)
    }

    cancel(){
        this.cancelAddSession.emit()
    }
    
}