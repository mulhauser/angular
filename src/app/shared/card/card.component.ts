import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nwt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // private property to store note value
  private _note: any;
  // private property to store delete$ value
  private _delete$: EventEmitter<any>;

  /**
   * Component constructor
   */
  constructor() {
    this._note = {};
    this._delete$ = new EventEmitter();
  }

  /**
   * Returns private property _note
   *
   * @returns {any}
   */
  get note(): any {
    return this._note;
  }

  /**
   * Sets private property _note
   *
   * @param note
   */
  @Input('note')
  set person(note: any) {
    this._note = note;
  }

  /**
   * Returns private property _delete$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('noteDelete') get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(person: any) {
    this._delete$.emit(person);
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }
}
