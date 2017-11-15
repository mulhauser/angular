import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/home.component';
import {NotesComponent} from './notes/notes.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'notes', component: NotesComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
