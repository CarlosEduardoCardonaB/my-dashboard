import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './sidemenu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SidemenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    //el .flat organiza un arreglo y lo aplana un poco, o sea que muestra los valores dentro de los arreglos
    .flat()
    .filter( route => route && route.path ) //validamos si la ruta existe y si tiene path lo colocamos en el dashBoardRoutes
    .filter( route => !route.path?.includes(':')); //con este validamos que no nos traiga ninguna ruta con ":" o sea que con esto retiramos el path user/:id


    constructor(){
    // const dashBoardRoutes = routes
    // .map(route => route.children ?? [])
    // el .flat organiza un arreglo y lo aplana un poco, o sea que muestra los valores dentro de los arreglos
    // .flat()
    // .filter( route => route && route.path ) //validamos si la ruta existe y si tiene path lo colocamos en el dashBoardRoutes
    // .filter( route => !route.path?.includes(':')) //con este validamos que no nos traiga ninguna ruta con ":" o sea que con esto retiramos el path user/:id

    // console.log(dashBoardRoutes);
  }

 }
