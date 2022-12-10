import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {IProduct} from "../models/prosucts";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  subscribe(arg0: () => void): any {
      throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getAll(): Observable<IProduct> {
    return this.http.get<IProduct>('https://randomuser.me/api?results=10', {

    }).pipe(
      delay(100),
      retry(2),
      catchError(this.errorHandler.bind(this))
    )

  }


  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}


