import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Settings} from "../utils/settings";

@Injectable()
export class WorkersService implements CRUDServiceInterface {

  constructor(private http:Http) {

  }

  fetch(filters?: any): Observable<any> {
    return this.http.get(Settings.WORKERS_END_POINT);
  }

  add(item): Observable<any> {
    return null;
  }

  update(item): Observable<any> {
    return this.http.put(Settings.WORKERS_END_POINT, item)
  }

  remove(id): Observable<any> {
    return this.http.delete(`${Settings.WORKERS_END_POINT}/${id}`)
  }

}
