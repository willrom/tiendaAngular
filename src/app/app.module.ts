import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioSesionService } from './servicios/inicio-sesion.service';
import { RouterAppModule }     from '../app/router-app/router-app.module';
import { NavbarComponent } from './navbar/navbar.component';
import { VprincipalComponent } from './vprincipal/vprincipal.component';
import { VcomprasComponent } from './vcompras/vcompras.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    NavbarComponent,
    VprincipalComponent,
    VcomprasComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterAppModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InicioSesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
