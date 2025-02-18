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
  // Y con el required le indicamos al componente que va a usar el selector <app-title/> que si o si debe enviar el título en el llamado
  @Input({ required: true }) title!: string;

  //Con el "transform: booleanAttribute" lo que hacemos es validar si estamos recibiendo el parámetro sea del tipo que sea en la invocación del <app-title/>
  //Lo que hace el "transform: booleanAttribute" es simplemente validar que la variable "withShadow" este o no esté. Si está nos arroja un true y si no un false
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
