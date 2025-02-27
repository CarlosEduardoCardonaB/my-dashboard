import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition1',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition1"></app-title>
    <section class="flex justify-start">

      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        heigth="300"
        style="view-transition-name: hero1"
      />

      <div class="bg-blue-500 w-56 h-56"
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
export default class ViewTransition1Component { }
