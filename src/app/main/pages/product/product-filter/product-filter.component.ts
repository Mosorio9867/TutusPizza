import { Component, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { merge, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements AfterViewInit {

  public form: FormGroup;

  @ViewChild('quickSearchInput', { static: true }) quickSearchInput: any;
  @Output() onChangeFilters: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      search: [null]
    })
  }

  ngAfterViewInit(): void {
    if (this.quickSearchInput) {
      merge(fromEvent(this.quickSearchInput.nativeElement, 'keyup'), fromEvent(this.quickSearchInput.nativeElement, 'paste'))
        .pipe(
          debounceTime(400),
          distinctUntilChanged(),
          filter((input: any) => !isNullOrUndefined(input)),
          tap((input: any) => {
            this.onChangeFilters.emit(input)
          })
        ).subscribe();
    }
  }

}
