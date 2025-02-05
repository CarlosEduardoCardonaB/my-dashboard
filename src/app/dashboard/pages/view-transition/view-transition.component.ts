import { Component } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [],
  templateUrl: './view-transition.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})

//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class ViewTransitionComponent { }
