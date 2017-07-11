import { Component, OnInit } from '@angular/core';
import {WorkersService} from "../../services/workers.service";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  workers = [];
  filters = {};

  constructor(private workersService:WorkersService) { }

  ngOnInit() {
    this.workersService.fetch()
      .subscribe((res) => {
        console.log(res.json());
        this.workers = res.json().data;
      })
  }

  removeItem(event){
    if(confirm('Are you sure?')) {
      this.workersService
        .remove(event)
        .subscribe((data) => {
          this.fetchItems();
        })
    }
  }

  updateItem(item){
    this.workersService
      .update(item)
      .subscribe((data) => {

      })
  }

  private fetchItems() {
    this.workersService
      .fetch(this.filters)
      .subscribe((res) => {
        this.workers = res.json().data;
      })
  }

}
