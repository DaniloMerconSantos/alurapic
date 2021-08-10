import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() search = new EventEmitter<string>();
  @Input() value = '';
  
  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.search.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.debounce.next(elemento.value);
    }
  }

  debounce: Subject<string> = new Subject<string>();
}