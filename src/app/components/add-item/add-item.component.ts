import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() newItem: Subject<any>;

  addItemModal;

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.addItemModal = this.modalService.open(content);
  }

  checkForm(form) {
    if(form.valid){
      this.newItem.next(form.value);
      this.addItemModal.close();
    } else {
      console.warn('Form invalid');
    }
  }
  ngOnInit() {

  }

}
