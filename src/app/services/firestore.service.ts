import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, setDoc, query, orderBy, collectionData, docData } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

// Interfaces para la estructura de los datos
export interface Transaction {
  name: string;
  description: string;
  amount: number;
  date: Date;
}

export interface Balance {
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  getTransactions(): Observable<Transaction[]> {
    const transactionsRef = collection(this.firestore, 'transactions');
    const q = query(transactionsRef, orderBy('date', 'desc'));
    return collectionData(q) as Observable<Transaction[]>;
  }

  getBalance(): Observable<Balance> {
    const balanceDoc = doc(this.firestore, 'balance/current');
    return docData(balanceDoc) as Observable<Balance>;
  }

  async addTransaction(transaction: Transaction) {
    try {
      const transactionsRef = collection(this.firestore, 'transactions');
      await addDoc(transactionsRef, transaction);
    } catch (error) {
      console.error('Error al agregar la transacción', error);
    }
  }

  async updateBalance(balance: Balance) {
    try {
      const balanceDoc = doc(this.firestore, 'balance/current');
      await setDoc(balanceDoc, balance);
    } catch (error) {
      console.error('Error al actualizar el balance', error);
    }
  }

  async registerUser(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error al registrar usuario', error);
      throw error;
    }
  }

  async registerWithGoogle(): Promise<User> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      return userCredential.user;
    } catch (error) {
      console.error('Error al registrar con Google', error);
      throw error;
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error al hacer login', error);
      throw error;
    }
  }

  async logoutUser() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Error al cerrar sesión', error);
      throw error;
    }
  }

  async addData(collectionName: string, data: any) {
    try {
      const collectionRef = collection(this.firestore, collectionName);
      await addDoc(collectionRef, data);
      console.log(`Datos guardados en la colección ${collectionName}`);
    } catch (error) {
      console.error('Error al agregar datos a Firestore', error);
    }
  }
}
