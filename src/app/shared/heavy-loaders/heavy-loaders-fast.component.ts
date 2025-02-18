import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">

      <!-- El ng-content sirve para que desde un coponente padre pueda enviar componentes hijos-->
      <ng-content />
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent {
   @Input({required:true }) cssClass!: string;

   constructor(){
    console.log('HeavyLoader Fast cargado');
   }
 }
