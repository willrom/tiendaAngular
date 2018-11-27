import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service'

@Component({
  selector: 'app-vistadetallada',
  templateUrl: './vistadetallada.component.html',
  styleUrls: ['./vistadetallada.component.css']
})
export class VistadetalladaComponent implements OnInit {

  vistad:string;

  constructor(private vista: InicioSesionService) {

    this.vistad= vista.otro

   }


  ngOnInit() {
  }

}
