import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes:string[] =['spiderman','thor','hulk', 'Capitan america'];
  heroeBorrado:string=''; //   || false || null || undefined;

  borrarHeroe(){
    console.log('borrando...'); 
    //this.heroes=[];
    this.heroeBorrado = this.heroes.shift()|| '';
    
    
  }
}
