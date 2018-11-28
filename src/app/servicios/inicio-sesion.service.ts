import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  items: AngularFireList<any[]>;
  nomfruta:string;
  dirfoto:string;
  precio:number;
  unidades:number;

  constructor(public afAuth: AngularFireAuth,private af: AngularFireDatabase) { }

  getcatalogo(){
    return  this.items = this.af.list('/catalogo');
  }

  getAuth(){
    return this.afAuth.authState.map ( auth => auth);
  }
  
  itemactual (nomfruta,dirfoto,precio,unidades){
      this.nomfruta = nomfruta;
      this.dirfoto = dirfoto;
      this.precio = precio;
      this.unidades = unidades;
    }

  logout(){
    return this.afAuth.auth.signOut();
  }

  login(email: string, password: string) {
    return new Promise ((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then (userData => resolve (userData),
    err => reject (err));
    })
  }
}
