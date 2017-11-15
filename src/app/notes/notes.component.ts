import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import "rxjs/add/operator/filter";
import "rxjs/add/operator/defaultIfEmpty";

@Component({
  selector: 'nwt-people',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  // private property to store people value
  private _notes: any[];
  // private property to store all backend URLs
  private _backendURL: any;

  /**
   * Component constructor
   */
  constructor(private _http: HttpClient) {
    this._notes = [];
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  /**
   * Returns private property _people
   *
   * @returns {any[]}
   */
  get notes(): any[] {
    console.log(this._notes);
    return this._notes;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._http.get(this._backendURL.allNotes)
      .subscribe((notes: any[]) => this._notes = notes);
  }

  /**
   * Function to delete one person
   *
   * @param person
   */
  delete(note: any) {
    this._http.delete(this._backendURL.oneNote.replace(':id', note.id))
      .filter(_ => !!_)
      .defaultIfEmpty([])
      .subscribe( (notes: any[]) => this._notes = notes);
  }
}
