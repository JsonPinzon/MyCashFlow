import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
