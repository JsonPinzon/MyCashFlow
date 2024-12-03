import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    email: '',
    password: '',
  };

  passwordVisible = false;
  constructor(private firestoreService: FirestoreService, private router: Router) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  async onLogin() {
    const { email, password } = this.loginData;

    if (!email || !password) {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    try {
      const user = await this.firestoreService.loginUser(email, password);
      console.log('Usuario autenticado:', user);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  onRegister(event: Event) {
    event.preventDefault(); 
    this.router.navigate(['/register']);
  }

  onLoginWithGoogle() {
    this.firestoreService.registerWithGoogle()
      .then(user => {
        console.log('Usuario autenticado con Google:', user);
      })
      .catch(error => {
        console.error('Error al iniciar sesión con Google:', error);
      });
  }
}
