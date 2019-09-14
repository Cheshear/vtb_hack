import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {LoginDtoInterface} from "./dtos/login.dto";
import {catchError} from "rxjs/operators";
import {AuthResponseDtoInterface} from "./dtos/auth-response.dto";

@Injectable()
export class AuthService {

  private loginURL = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {
  }

  public signIn(requestParam: LoginDtoInterface): Observable<AuthResponseDtoInterface> {
    return this.http.post<AuthResponseDtoInterface>(this.loginURL, requestParam)
      .pipe(
        catchError((err: HttpErrorResponse, caught) => this.errorHandler(err, caught))
      );
  }

  public logout(): void {
    localStorage.clear();
  }

  private errorHandler(err: HttpErrorResponse, caught): Observable<any> {
    return Observable.throw(new Error(err.error.message));
  }
}
