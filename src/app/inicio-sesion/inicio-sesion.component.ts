import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { InicioSesionService } from '../servicios/inicio-sesion.service'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  miFormulario: FormGroup;
  public email: string;
  public password: string;

  prueba(){
    console.log(this.email)
    console.log("hola")
  }

  constructor(public outService:  InicioSesionService ) { 
    
  }

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'nombre-email': new FormControl('sin titulo',Validators.required),
      'password-email': new FormControl('',Validators.required),
    })
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
