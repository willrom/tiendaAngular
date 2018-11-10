import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  email: string;
  password: string;

  prueba(){
    console.log(this.email)
    console.log("hola")
  }

  constructor() { 
    
  }

  ngOnInit() {
  }

}
