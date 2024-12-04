import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private useFirebase = true; // Cambia según tu configuración

  constructor(private firestore: AngularFirestore, private storage: Storage) {
    this.storage.create();
  }

  async agregarGasto(gasto: { cantidad: number; categoria: string; fecha: Date }) {
    if (this.useFirebase) {
      await this.firestore.collection('gastos').add(gasto);
    } else {
      const gastos = await this.storage.get('gastos') || [];
      gastos.push(gasto);
      await this.storage.set('gastos', gastos);
    }
  }

  async agregarIngreso(ingreso: { cantidad: number; categoria: string; fecha: Date }) {
    if (this.useFirebase) {
      await this.firestore.collection('ingresos').add(ingreso);
    } else {
      const ingresos = await this.storage.get('ingresos') || [];
      ingresos.push(ingreso);
      await this.storage.set('ingresos', ingresos);
    }
  }

  postGasto(gasto: { cantidad: number; categoria: string; descripcion: string; fecha: Date }) {
    sessionStorage.setItem('gasto', JSON.stringify(gasto))
  }

}
