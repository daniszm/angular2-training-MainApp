import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { ItemsComponent } from './components/items/items.component';
import { WorkersComponent } from './components/workers/workers.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { SearchComponent } from './components/search/search.component';
import {ItemsService} from "./services/items.service";
import {BrowserXhr, HttpModule} from "@angular/http";
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
import { AuthComponent } from './components/auth/auth.component';
import {AuthService} from "./services/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CORSXhr} from "./utils/cors-xhr";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AddItemComponent } from './components/add-item/add-item.component';
import { RegisterComponent } from './components/register/register.component';
import {WorkersService} from "./services/workers.service";
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WorkersComponent,
    DatagridComponent,
    SearchComponent,
    MapToIterablePipe,
    AuthComponent,
    AddItemComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'workers', component: WorkersComponent},
      {path: 'register-form', component: RegisterFormComponent}
    ])
  ],
  providers: [
    ItemsService,
    AuthService,
    WorkersService,
    {provide: BrowserXhr, useClass: CORSXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
