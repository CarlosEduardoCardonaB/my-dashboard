import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class DeferOptionsComponent {



 }
