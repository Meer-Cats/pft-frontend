import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EmployeeApiService} from '../../services/employee-api.service';
import {CurrentUserService} from '../../services/current-user.service';
import {User} from '../../models/user';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private currentUserService: CurrentUserService,
    private employeeService: EmployeeApiService,
    private fb: FormBuilder,
    private router: Router,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (i != null) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    this.employeeService
      .login(this.validateForm.controls.username.value, this.validateForm.controls.password.value)
      .subscribe((u: User) => {
          if (u) {
            this.currentUserService.currentUser$.next({
              avatar: this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64, ' + u.avatar),
              isHR: u.isHR,
              mail: u.mail,
              name: u.name
            });

            if (u.isHR) {
              this.router.navigate(['humanresource']);
            } else {
              this.router.navigate(['employee']);
            }
          }
        }
      );
  }
}
