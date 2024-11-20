import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'registro-gastos',
    loadChildren: () => import('./pages/registro-gastos/registro-gastos.module').then(m => m.RegistroGastosPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./pages/reporte/reporte.module').then(m => m.ReportePageModule)
  },
  {
    path: 'objetivos',
    loadChildren: () => import('./pages/objetivos/objetivos.module').then(m => m.ObjetivosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
