import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class DashboardComponent { }
