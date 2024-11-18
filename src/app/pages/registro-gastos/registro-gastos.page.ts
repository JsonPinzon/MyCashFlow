import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-registro-gastos',
  templateUrl: './registro-gastos.page.html',
  styleUrls: ['./registro-gastos.page.scss'],
})
export class RegistroGastosPage implements OnInit {

  constructor(private gastosService: GastosService) { } 

  ngOnInit() { 
    this.initializePage(); 
  } 
  
  initializePage() { 
    console.log('RegistroGastosPage initialized'); 
    }

  onSubmit(form: NgForm) { 
    const { cantidad, categoria, tipo, fecha } = form.value; 
    if (tipo === 'gasto') { 
      this.gastosService.agregarGasto({ cantidad, categoria, fecha }); 
    } else if (tipo === 'ingreso') { 
      this.gastosService.agregarIngreso({ cantidad, categoria, fecha }); 
    } 
  } 
}
