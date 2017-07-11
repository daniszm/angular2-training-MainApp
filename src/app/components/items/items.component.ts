import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
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

  private fetchItems() {
    this.itemsService
      .fetch()
      .subscribe((response) => {
        this.items = response.json().data;
      })
  }
}
