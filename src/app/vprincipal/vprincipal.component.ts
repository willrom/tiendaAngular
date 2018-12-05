import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import { Carrocompras } from '../objetos/carrocompras';



@Component({
  selector: 'app-vprincipal',
  templateUrl: './vprincipal.component.html',
  styleUrls: ['./vprincipal.component.css']
})
export class VprincipalComponent implements OnInit {

  public catalogo: any[];
  public orden: string = 'nombre';
  public foto: string;
  nomfruta:string;
  dirfoto:string;
  precio:number;
  unidades:number;
  cantidad:number; 
  compra:Carrocompras;   

  
  
  constructor(private liscatalogo:InicioSesionService) {}
  
  ngOnInit() {
    this.liscatalogo.getcatalogo()
    .snapshotChanges()
    .subscribe(item =>{
      this.catalogo = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.catalogo.push(x);
      })
    })
  }
  ver(nomfruta,dirfoto,precio,unidades){
    this.liscatalogo.itemactual(nomfruta,dirfoto,precio,unidades);
  }

  addCompra(nomfruta,dirfoto,precio,cantidad){
    this.compra = {
      nombre: nomfruta,
      imagen: dirfoto,
      cantidad: cantidad,
      subtotal: precio
      };
      this.liscatalogo.anadirCompra(this.compra)
    }
   
}
