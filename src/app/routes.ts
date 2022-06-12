import {EventDetailsComponent,
    EventListResolver,
    EventsListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventResolver
     } from './events/index';
import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";

export const appRoutes:Routes = [
    {path:'events', component:EventsListComponent, resolve:{events:EventListResolver}},
    {path:'events/new', component:CreateEventComponent},
    {path:'events/:id', component:EventDetailsComponent, resolve:{event:EventResolver}},
    {path:'events/session/new', component:CreateSessionComponent},
    {path:'404', component:Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'full'},
    {
        path:'user',
        loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
     }
    // {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
]