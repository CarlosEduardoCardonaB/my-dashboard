import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [TitleComponent, JsonPipe],
  template: `<app-title [title]="currentFramework()" />

    <pre>{{ frameWorkAsSignal() | json}}</pre>
    <pre>{{ frameWorkAsProperty | json }}</pre>

  `,
  //El changeDetection nos sirve para hacer la verificación de un cambio puntual y no estar pendiente de cambios de manera global en el proyecto.
  //Esto son optimizaciones de Angular para performance, de la manera anterior Angular está escuchando cambios en todo el proyecto y esto castiga performance
  //Entonces la idea es trabajar con señales(signals) para mejorar performance
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameWorkAsSignal().name }`
  );

  public frameWorkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameWorkAsProperty = ({
    name: 'Angular',
    releaseDate: 2016
  });


  constructor(){
    setTimeout(() => {

      //Forma tradicional de escuchar cambios, angular cambiará en tiempo real el valor visual pero esto puede ser deprecado por no ser optimo para el rendimiento
      this.frameWorkAsProperty.name = 'React';

      //Forma recomendada con señales
      this.frameWorkAsSignal.update( value => {
        value.name = 'React';
        return {...value};
      });

      console.log('Cargado constructor');
    }, 3000);
  }

 }
