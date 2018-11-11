import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  public email: string;
  public password: string;

  prueba(){
    console.log(this.email)
    console.log("hola")
  }

  constructor(public outService:  InicioSesionService ) { 
    
  }

  ngOnInit() {
  }

  nvousuario(){
    this.outService.login(this.email, this.password)
    .then((res)=>{
      console.log("bien");
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
