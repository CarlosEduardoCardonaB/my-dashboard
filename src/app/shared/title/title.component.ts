import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl mb-5">{{ title }} -  {{ withShadow }}</h1>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TitleComponent {
  //con el simbolo de admiración ! le decimos a typescritp que esta variable siempre va a tener un valor para que no me pida inicializarla
  @Input({ required: true }) title!: string;

  //Con el "booleanAttribute" lo que hacemos es validar si el atributo está o no está y el nos va a imprimir un true si está o un false si no lo envian, y no importa si del otro lado lo envían como un string, el solo valida si está o no presente
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
