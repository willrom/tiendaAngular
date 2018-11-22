import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component'
import { NavbarComponent } from '../navbar/navbar.component'
import { VprincipalComponent } from '../vprincipal/vprincipal.component'
import { VcomprasComponent } from '../vcompras/vcompras.component'
import { SeguridadGuard } from '../seguridad/seguridad.guard'


const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'home', component: VprincipalComponent, canActivate: [SeguridadGuard] },
  { path: 'compras', component: VcomprasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RouterAppModule { }
