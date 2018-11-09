import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { InicioSesionService } from './servicios/inicio-sesion.service'
import { error } from '../../node_modules/protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Inisesion: InicioSesionService){

  }
  login() {
    alert("ok")
    this.Inisesion.login()
      .then((data)=>{
        console.log(data);
        alert('exito');
      })
      .catch((error)=>{
        console.log(error);
        alert('error');
      })
  }
}
