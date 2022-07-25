import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl=""
  constructor(private http: HttpClient) { 
    this.baseurl = environment.api
  }

  geturl(url,value) {
    console.log(this.baseurl+url)
    let params = new HttpParams().set("city",value)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'});
    return this.http.get(`${this.baseurl+url}`,{headers:headers,params:params}).pipe();
  }

  gethistoryurl(url,lat,lon,dt) {
    console.log(this.baseurl+url)
    let params = new HttpParams().set("lat",lat).set("lon",lon).set("dt",dt)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'});
    return this.http.get(`${this.baseurl+url}`,{headers:headers,params:params}).pipe();
  }

    // Handle Errors
    error(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
}
