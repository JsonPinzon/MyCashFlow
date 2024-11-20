import { Component } from '@angular/core';
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

  constructor(private firestoreService: FirestoreService) {}

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
}
