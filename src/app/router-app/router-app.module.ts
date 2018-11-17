import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component'
import { NavbarComponent } from '../navbar/navbar.component'
import { VprincipalComponent } from '../vprincipal/vprincipal.component'
import { VcomprasComponent } from '../vcompras/vcompras.component'


const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'home', component: VprincipalComponent },
  { path: 'compras', component: VcomprasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RouterAppModule { }
