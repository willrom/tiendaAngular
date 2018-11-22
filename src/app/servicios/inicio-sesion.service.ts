import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { auth } from 'firebase/app';
import { promise } from '../../../node_modules/protractor';
import { resolve } from 'path';
import { reject } from '../../../node_modules/@types/q';
import { EmailValidator } from '../../../node_modules/@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  items: AngularFireList<any[]>;

  constructor(public afAuth: AngularFireAuth,private af: AngularFireDatabase) { }

  getcatalogo(){
    return  this.items = this.af.list('/catalogo');
  }

  getAuth(){
    return this.afAuth.authState.map ( auth => auth);
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
