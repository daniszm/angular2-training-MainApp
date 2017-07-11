import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions} from "@angular/http";
import {Settings} from "../utils/settings";

@Injectable()
export class ItemsService implements CRUDServiceInterface {

  constructor(private http:Http) { }

  fetch(filters?: any): Observable<any> {
    const opts: RequestOptions = new RequestOptions();
    opts.params = filters;

    return this.http.get(Settings.ITEMS_END_POINT, opts);
  }

  add(item): Observable<any> {
    return null;
  }

  update(item): Observable<any> {
    return null;
  }

  remove(id): Observable<any> {
    return this.http.delete(`${Settings.ITEMS_END_POINT}/${id}`)
  }
}
