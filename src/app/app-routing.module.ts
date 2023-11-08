import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'conectar-disp',
    loadChildren: () => import('./pages/conectar-disp/conectar-disp.module').then( m => m.ConectarDISPPageModule)
  },
  {
    path: 'mostrar-qr',
    loadChildren: () => import('./pages/mostrar-qr/mostrar-qr.module').then( m => m.MostrarQRPageModule)
  },
  {
    path: 'user-profesor',
    loadChildren: () => import('./pages/user-profesor/user-profesor.module').then( m => m.UserProfesorPageModule)
  },
  {
    path: 'scan-assis',
    loadChildren: () => import('./pages/scan-assis/scan-assis.module').then( m => m.ScanAssisPageModule)
  },
  {
    path: 'listar-alumnos/:seccion',
    loadChildren: () => import('./pages/listar-alumnos/listar-alumnos.module').then( m => m.ListarAlumnosPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
