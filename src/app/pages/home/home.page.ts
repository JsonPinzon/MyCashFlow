import { Component, OnInit } from '@angular/core';
import { FirestoreService, Transaction, Balance } from '../../services/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  transactions$!: Observable<Transaction[]>;
  balance$!: Observable<Balance>;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.transactions$ = this.firestoreService.getTransactions();
    this.balance$ = this.firestoreService.getBalance();
  }

  addTransaction() {
    const transaction: Transaction = {
      name: 'Compra de café',
      description: 'Compra en Starbucks',
      amount: 5000,
      date: new Date(),
    };
    this.firestoreService.addTransaction(transaction);
  }

  updateBalance() {
    const newBalance: Balance = {
      amount: 1000,
    };
    this.firestoreService.updateBalance(newBalance);
  }
}
