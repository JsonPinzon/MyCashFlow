import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-inicio',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group(
      { email: ['', [Validators.required, Validators.email]], password: ['', [Validators.required, Validators.minLength(6)]], })
  }

  onSubmit() {
    this.router.navigate(['/inicio'])
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value)
      this.router.navigate(['/inicio'])
    }
  }
}
