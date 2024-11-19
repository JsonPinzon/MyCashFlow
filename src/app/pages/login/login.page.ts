import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  passwordVisible = false;

  constructor() {}

  onLogin() {
    console.log('Iniciar sesión con correo y contraseña');
  }

  onLoginWithGoogle() {
    console.log('Iniciar sesión con Google');
  }

  onRegister() {
    console.log('Redirigir al registro');
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
