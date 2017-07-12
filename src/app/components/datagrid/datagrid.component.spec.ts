import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridComponent } from './datagrid.component';
import {MapToIterablePipe} from "../../pipes/map-to-iterable.pipe";
import {FormsModule} from "@angular/forms";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('DatagridComponent', () => {
  let component: DatagridComponent;
  let fixture: ComponentFixture<DatagridComponent>;
  let template: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridComponent, MapToIterablePipe ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render two rows', () => {
    component.items = [{title: "tomato"}, {title: "potatoes"}];
    fixture.detectChanges();
    const rows = template.queryAll(By.css('tbody tr'));

    expect(rows.length).toBe(component.items.length);
  });
});
