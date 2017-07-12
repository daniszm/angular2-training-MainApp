import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items;
  total;
  filters = {
    currentPage: 1,
    itemsPerPage: 10
  };

  newItem: Subject<any> = new Subject();

  constructor(private itemsService: ItemsService, public authService:AuthService) {
    this.newItem.subscribe((data) => {
      this.itemsService.add(data)
        .subscribe((response)=>{
          console.log(response.json);
        });
    })
  }

  ngOnInit() {
    this.fetchItems();
  }

  updateFilters(filters) {
    this.filters = {...this.filters, ...filters};
    this.fetchItems();
  }

  removeItem(id){
    if(confirm('Are you sure?')) {
      this.itemsService
        .remove(id)
        .subscribe((data) => {
          this.fetchItems();
        })
    }
  }

  updateItem(item){
    this.itemsService
      .update(item)
      .subscribe((data) => {

      })
  }

  fetchItems() {
    this.itemsService
      .fetch(this.filters)
      .subscribe((response) => {
        this.items = response.json().data;
        this.total = response.json().total;
      })
  }
}
