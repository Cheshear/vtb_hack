import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {BackendService} from "../services/backend/backend.service";
import {AuthResponseDtoInterface} from "./dtos/auth-response.dto";
import {REST_API_URLS} from '../config/REST_API_URLS';

@Injectable()
export class AuthGuard implements CanActivate {
  private token: string;
  private tryToAuthorizeUrl = REST_API_URLS.TRY_TO_AUTHORIZE;

  constructor(private backendService: BackendService, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.backendService.get(this.tryToAuthorizeUrl)
      .pipe(
        map((response: AuthResponseDtoInterface) => {
          localStorage.setItem("role", response.token);
          return true;
        }),
      );
  }
}
