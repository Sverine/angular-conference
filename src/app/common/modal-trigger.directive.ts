import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    private el?:HTMLElement;
    @Input('modal-trigger') modalId?:string;
    constructor(ref:ElementRef){
        this.el = ref.nativeElement
    }

    ngOnInit(): void {
        this.el?.addEventListener('click',e=>{
            (<any>$(`#${this.modalId}`)).modal({});
        })
    }

}