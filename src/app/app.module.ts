import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { 
  EventThumbnailComponent,
  EventsListComponent,
  EventsService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpVoteComponent,
  VoterService,
  LocationValidatorDirective,
  EventResolver
 } from './events/index'

 import {CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index'

import { EventsAppComponent } from './event.app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers:[
    EventsService,
    EventListResolver,
    EventResolver,
    AuthService,
    VoterService
    // {
    //   provide:'canDeactivateCreateEvent',
    //   useValue:'checkDirtyState'
    //  }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// export function checkDirtyState(component:CreateEventComponent){
//   if(component.isDirty) 
//     return window.confirm('Do you really want to cancel ?')
//   return true
// }
