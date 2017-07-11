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
import {FormsModule} from "@angular/forms";
import {CORSXhr} from "./utils/cors-xhr";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WorkersComponent,
    DatagridComponent,
    SearchComponent,
    MapToIterablePipe,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'workers', component: WorkersComponent}
    ])
  ],
  providers: [
    ItemsService,
    AuthService,
    {provide: BrowserXhr, useClass: CORSXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
