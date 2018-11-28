import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service'

@Component({
  selector: 'app-vistadetallada',
  templateUrl: './vistadetallada.component.html',
  styleUrls: ['./vistadetallada.component.css']
})
export class VistadetalladaComponent implements OnInit {

  nomfruta:string;
  dirfoto:string;
  precio:number;
  unidades:number;

  constructor(private vista: InicioSesionService) {

    this.nomfruta= vista.nomfruta;
    this.dirfoto= vista.dirfoto;
    this.precio= vista.precio;
    this.unidades= vista.unidades;

   }


  ngOnInit() {
  }

}
