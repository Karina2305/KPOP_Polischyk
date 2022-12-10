import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable, retry, tap} from "rxjs";
import {IProduct} from "../models/prosucts";

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  subscribe(arg0: () => void): any {
      throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct> {
    return this.http.get<IProduct>('https://randomuser.me/api?results=10', {

    }).pipe(
      delay(100),
      retry(2)
    )


  }
}


