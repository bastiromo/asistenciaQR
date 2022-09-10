import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'asignatura01',
    loadChildren: () => import('./asignatura01/asignatura01.module').then( m => m.Asignatura01PageModule)
  },
  {
    path: 'asignatura02',
    loadChildren: () => import('./asignatura02/asignatura02.module').then( m => m.Asignatura02PageModule)
  },
  {
    path: 'asignatura03',
    loadChildren: () => import('./asignatura03/asignatura03.module').then( m => m.Asignatura03PageModule)
  },
  {
    path: 'asignatura04',
    loadChildren: () => import('./asignatura04/asignatura04.module').then( m => m.Asignatura04PageModule)
  },
  {
    path: 'asignatura05',
    loadChildren: () => import('./asignatura05/asignatura05.module').then( m => m.Asignatura05PageModule)
  },
  {
    path: 'asignatura06',
    loadChildren: () => import('./asignatura06/asignatura06.module').then( m => m.Asignatura06PageModule)
  },
  {
    path: 'asignatura07',
    loadChildren: () => import('./asignatura07/asignatura07.module').then( m => m.Asignatura07PageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('./recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
