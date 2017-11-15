// CORE MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// MATERIAL DESIGN MODULES
import {MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import {APP_ROUTES} from './app.routes';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from "./home/home.component";
import { NotesComponent } from './notes/notes.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [AppComponent, NoteComponent, HomeComponent, NotesComponent, CardComponent],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
