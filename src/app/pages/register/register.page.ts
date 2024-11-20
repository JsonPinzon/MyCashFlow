import { Component } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  passwordVisible = false;
  termsAccepted = false;
  registerData = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
  };

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  ) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  openTerms() {
    console.log('Abrir términos de servicio');
  }

  openPrivacy() {
    console.log('Abrir política de privacidad');
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  async onRegister() {
    const { fullName, email, password, phone } = this.registerData;

    if (!fullName || !email || !password || !phone) {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    if (!this.termsAccepted) {
      console.error('Debes aceptar los términos y condiciones.');
      return;
    }

    try {
      const user = await this.firestoreService.registerUser(email, password);
      console.log('Usuario registrado:', user);

      await this.firestoreService.addData('users', {
        uid: user.uid,
        fullName,
        phone,
        email,
      });
      console.log('Datos guardados en Firestore.');

      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }

  async onRegisterWithGoogle() {
    try {
      const user: User = await this.firestoreService.registerWithGoogle();
      console.log('Usuario registrado con Google:', user);
    } catch (error) {
      console.error('Error al registrar con Google:', error);
    }
  }
}
