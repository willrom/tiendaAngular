import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(public afAuth: AngularFireAuth) { }
  login() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
