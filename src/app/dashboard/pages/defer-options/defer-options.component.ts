import { Component } from '@angular/core';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class DeferOptionsComponent { }
