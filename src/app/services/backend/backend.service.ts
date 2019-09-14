import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/empty';
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import 'rxjs/add/observable/throw';
import {of} from "rxjs/observable/of";

@Injectable()
export class BackendService {
  constructor(private http: HttpClient, private router: Router) {
  }

  public get(url: string, params?): Observable<any> {
    const token = localStorage.getItem("token");
    if (token) {
      return this.http.get(url, {headers: {token: token}, params: params})
        .pipe(
          catchError(((err: HttpErrorResponse, caught) => this.errorHandler(err, url, params, false)),
          ));
    } else {
      return Observable.throw(new Error("token empty"));
    }
  }

  public post(url: string, body: Object, options?: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (token) {
      options = options || {headers: {token: token}};
      return this.http.post(url, body, options)
        .pipe(
          catchError(((err: HttpErrorResponse, caught) => this.errorHandler(err, url, body, options, true)),
          ));
    } else {
      return Observable.throw(new Error("token empty"));
    }
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  private getAccessTokenErrorHandler(err: HttpErrorResponse) {
    switch (err.status) {
      case 403:
        this.router.navigate(['main-menu']);
        return of(false);
      case 401:
        this.router.navigate(['main-menu']);
        return of(false);
      default:
        alert(err.message);
        return Observable.empty();
    }
  }

  private errorHandler(err: HttpErrorResponse, url?: string, body?: object,
                       options?: any, params?: any, isPostRequest?: boolean): Observable<any> {
    switch (err.status) {
      case 401:
        this.router.navigate(['']);
        return Observable.throw(new Error('error'));
      default:
        return Observable.throw(new Error('error'));
    }
  }
}
