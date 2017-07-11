import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { ItemsComponent } from './components/items/items.component';
import { WorkersComponent } from './components/workers/workers.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WorkersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'workers', component: WorkersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
