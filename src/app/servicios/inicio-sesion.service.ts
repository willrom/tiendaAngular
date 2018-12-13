import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import 'rxjs/add/operator/map';
import { Carrocompras } from '../objetos/carrocompras';
import { CarritoCompra } from '../objetos/carrito-compra'
import { createRouterScroller } from '../../../node_modules/@angular/router/src/router_module';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  items: AngularFireList<any[]>;
  nomfruta:string;
  dirfoto:string;
  precio:number;
  unidades:number;
  cantidad:number;
  total:number;
  // compra : {
  //   $key: string,
  //   nombre: string,
  //   foto: string,
  //   precio: number,
  //   unidades: number,
  //   subtotal: number
  // };
  comprasdb : CarritoCompra []=[];

  constructor(public afAuth: AngularFireAuth,public af: AngularFireDatabase) {}

  getcatalogo(){
    return  this.items = this.af.list('/catalogo');
  }

  actualizar($key,compra) {
    this.items.update($key,compra);
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

  anadirCompra(compra,total) {
    this.comprasdb.push(compra);
    this.total=total;
  }

  login(email: string, password: string) {
    return new Promise ((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then (userData => resolve (userData),
    err => reject (err));
    })
  }
}
