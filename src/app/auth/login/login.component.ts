import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";
import {LoginDtoInterface} from "../dtos/login.dto";
import {AuthResponseDtoInterface} from "../dtos/auth-response.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  @Output() shouldBeClosed = new EventEmitter();

  private signInSubscription: Subscription;
  public errorMessage: string;
  public signupForm: FormGroup;
  public isAuthorized = false;

  constructor(private fb: FormBuilder, private loginService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'email': '',
      'password': '',
    });
  }

  ngOnDestroy() {
    this.signInSubscription && this.signInSubscription.unsubscribe();
  }

  onRedirect() {
    this.shouldBeClosed.emit();
  }
  onSubmit() {
    const {email, password} = this.signupForm.value;
    console.log(password);
    const loginRequest: LoginDtoInterface = {
      email,
      password
    };
    this.signInSubscription = this.loginService.signIn(loginRequest).subscribe(
      (res: AuthResponseDtoInterface) => {
          localStorage.setItem('token', res.token);
          this.isAuthorized = true;
          this.shouldBeClosed.emit();
          this.router.navigate(['home', 'user-page']);
      }, err => {
        this.errorMessage = err.message;
      }
    );
  }



}
