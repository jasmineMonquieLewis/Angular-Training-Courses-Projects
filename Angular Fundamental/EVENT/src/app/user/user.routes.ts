import { ProfileComponent } from './profile.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const UserRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
];