import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  gasto: any = {};

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.gasto)
    const gastoString = sessionStorage.getItem('gasto')

    if (gastoString) {

      this.gasto = JSON.parse(gastoString);
      this.formatoGasto()

    }
  }


  formatoGasto() {
    this.gasto.cantidad = parseFloat(this.gasto.cantidad).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    const date = new Date(this.gasto.fecha);
    this.gasto.fecha = date.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  }

  onSubmit() {

  }

  onProfileClick() {
    this.router.navigate(['/perfil'])
  }

  navegacion(menu: string) {
    switch (menu) {
      case 'home':
        this.router.navigate(['/inicio'])
        break
      case 'registro':
        this.router.navigate(['/registro-gastos'])
        break


    }
  }

}
