import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { promise } from '../../../node_modules/protractor';
import { resolve } from 'path';
import { reject } from '../../../node_modules/@types/q';
import { EmailValidator } from '../../../node_modules/@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(public afAuth: AngularFireAuth) { }


  login(email: string, password: string) {
    return new Promise ((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then (userData => resolve (userData),
    err => reject (err));
    })
  }
}
