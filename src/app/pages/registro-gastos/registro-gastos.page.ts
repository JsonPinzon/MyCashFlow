import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-registro-gastos',
  templateUrl: './registro-gastos.page.html',
  styleUrls: ['./registro-gastos.page.scss'],
})
export class RegistroGastosPage implements OnInit {

  constructor(private gastosService: GastosService, private router: Router) { }

  ngOnInit() {
    this.initializePage();
  }

  initializePage() {
    console.log('RegistroGastosPage initialized');
  }

  onSubmit(form: NgForm) {

    const { cantidad, categoria, descripcion, tipo, fecha } = form.value;
    if (tipo === 'gasto') {
      this.gastosService.postGasto({ cantidad, categoria, descripcion, fecha })
      window.location.reload()
      this.router.navigate(['/inicio'])
      //this.gastosService.agregarGasto({ cantidad, categoria, fecha });
    } else if (tipo === 'ingreso') {
      this.gastosService.agregarIngreso({ cantidad, categoria, fecha });
    }
  }


  navegacion(menu: string) {
    switch (menu) {
      case 'home':
        this.router.navigate(['/inicio'])
        window.location.reload()
        break
      case 'registro':
        this.router.navigate(['/registro-gastos'])
        break


    }
  }


}
