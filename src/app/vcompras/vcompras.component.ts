import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import { Carrocompras } from '../objetos/carrocompras'

@Component({
  selector: 'app-vcompras',
  templateUrl: './vcompras.component.html',
  styleUrls: ['./vcompras.component.css']
})
export class VcomprasComponent implements OnInit {

  carrito: Carrocompras[]=[];

  constructor(private compra:InicioSesionService) {
    this.carrito=compra.comprasdb
   }

  ngOnInit() {
  }

}
