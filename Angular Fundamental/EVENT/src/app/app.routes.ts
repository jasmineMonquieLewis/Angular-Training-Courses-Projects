import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolver
} from './events/index';

import { Error404Component } from './errors/error404.component';

export const AppRoutes: Routes = [
    {
        path: 'events/create', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: 'events', component: EventsListComponent,
        resolve: { events: EventListResolver } //allows our page to load data asynchronously
    },
    {
        path: 'events/:id', component: EventDetailsComponent,
        canActivate: [EventRouteActivatorService]
    },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];