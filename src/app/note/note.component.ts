import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'nwt-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  // private property to store person value
  private _note: any;
  // private property to store all backend URLs
  private _backendURL: any;
  /**
   * Component constructor
   */
  constructor(private _http: HttpClient) {
    this._note = {};
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  get note(): any {
    return this._note;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._http.get(this._backendURL.allNotes)
      .subscribe((notes: any[]) => this._note = notes.shift());
  }

}
