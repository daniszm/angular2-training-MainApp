import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  @Input() items: any[];
  @Input() access: boolean;

  @Output() removeEvent: EventEmitter<number> = new EventEmitter();
  @Output() updateEvent: EventEmitter<number> = new EventEmitter();

  remove(id) {
    this.removeEvent.emit(id);
  }
  constructor() { }

  inputChange(item){
    this.updateEvent.emit(item)
  }
  ngOnInit() {
  }

}
