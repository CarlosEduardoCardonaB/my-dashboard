import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './change-detection.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class ChangeDetectionComponent { }
