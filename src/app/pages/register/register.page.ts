import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  passwordVisible = false;
  termsAccepted = false;

  constructor() {}

  onRegister() {
    if (!this.termsAccepted) {
      console.error('Debes aceptar los términos y condiciones');
      return;
    }
    console.log('Registrarse con datos ingresados');
  }

  onRegisterWithGoogle() {
    console.log('Registrarse con Google');
  }

  onLogin() {
    console.log('Navegar al login');
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  openTerms() {
    console.log('Abrir términos de servicio');
  }

  openPrivacy() {
    console.log('Abrir política de privacidad');
  }
}
