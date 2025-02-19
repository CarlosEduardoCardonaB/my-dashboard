import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition2',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition2"></app-title>
    <section class="flex justify-end">

      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        heigth="300"
        style="view-transition-name: hero1"
      />

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      >

      </div>

    </section>

  `,
  styles: `
    :host {
      display: block;
    }
  `,
})

//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class ViewTransition2Component { }
