import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() controls: any[];
  @Output() filtersEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onInput(form) {
    this.filtersEvent.emit(form.value);
  }

}
