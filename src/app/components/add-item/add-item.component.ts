import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  addItemModal;

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.addItemModal = this.modalService.open(content);
  }

  checkForm(form) {
    if(form.valid){
      console.log("sss");
      this.addItemModal.close();
    } else {
      console.warn('Form invalid');
    }
  }
  ngOnInit() {
  }

}
