import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public islogin :boolean;
  public nomusuario: string;
  public emailusuario: string;

  constructor(public authser: InicioSesionService ) { }

  logout(){
    this.authser.logout();
  }

  ngOnInit() {
    this.authser.getAuth().subscribe (auth =>{
      if (auth) {
        this.islogin=true;
        this.nomusuario = auth.displayName;
        this.emailusuario = auth.email;
      } else {
        this.islogin = false;
      }
    })
  }

}
