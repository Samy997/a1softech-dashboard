import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private rememberData: boolean;

  loginForm: FormGroup;
  register: boolean;
  submitted: boolean;
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initForm();

    this.route.queryParamMap.subscribe((qParams) => {
      this.register = JSON.parse(qParams.get('register'));
    });
  }

  ngOnInit(): void {}

  private initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  keepData(e: { checked: boolean }) {
    if (e.checked) {
      this.rememberData = true;
    } else {
      this.rememberData = false;
    }
  }

  onSubmit() {
    if (!this.register) {
      return this.login();
    } else {
      this.registerUser();
    }
  }

  private login() {
    if (this.isFormValid) {
      this.submitted = true;
      this.authService.login(this.loginForm.value).subscribe(
        (res) => {
          this.setTokenandNavigate(res);
        },
        (err) => {
          this.error = err.error.error;
          this.submitted = false;
          this.hideError();
        }
      );
    }
  }

  private registerUser() {
    if (this.isFormValid) {
      this.submitted = true;
      this.authService.register(this.loginForm.value).subscribe(
        (res) => {
          this.setTokenandNavigate(res);
        },
        (err) => {
          this.error = err.error.error;
          this.submitted = false;
          this.hideError();
        }
      );
    }
  }

  private setTokenandNavigate(token: object) {
    this.authService.setToken(token, this.rememberData);
    if (this.authService.redirectUrl) {
      this.router.navigate([this.authService.redirectUrl]);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  private hideError() {
    setTimeout((_) => (this.error = null), 2000);
  }

  isFieldInvalid(fieldName) {
    return (
      this.loginForm.get(fieldName).invalid &&
      this.loginForm.get(fieldName).touched
    );
  }

  private get isFormValid() {
    this.markAllFieldsAsTouched();
    return this.loginForm.valid;
  }

  markAllFieldsAsTouched(formGroup = this.loginForm) {
    Object.keys(formGroup.controls).forEach((key) => {
      if (formGroup.controls[key] instanceof FormGroup) {
        this.markAllFieldsAsTouched(formGroup.controls[key] as FormGroup);
      } else if (formGroup.controls[key] instanceof FormControl) {
        formGroup.controls[key].markAsTouched({ onlySelf: true });
      }
    });
  }
}
