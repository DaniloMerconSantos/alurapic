import { LoadingType } from './loading-type';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingsubject = new Subject<LoadingType>();
  constructor() { }

  getLoading() {
    return this.loadingsubject
      .asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  start() {
    this.loadingsubject.next(LoadingType.LOADING);
  }

  stop() {
    this.loadingsubject.next(LoadingType.STOPPED)
  }
  
}
