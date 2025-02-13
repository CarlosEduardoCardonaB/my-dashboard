import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'| 'B' | 'C' | 'D' | 'E' | 'F'



@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})

//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class ControlFlowComponent {

  public titleEnviado = 'Control Flow'


  public showContent = signal(false);
  //si declaramos esta señal como "asReadonly" no vamos a poder modificarla con el método "update"
  //public showContent = signal(false).asReadonly;


  public grade = signal<Grade>('A');
  count:number = 0;
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);

  //Este caso de señal vacía es para probar el @empty del html, esto quiere decir que cuando no hay elementos, entonces se muestra lo que este adentro del @empty
  public frameworks2 = signal([]);


  public toggleContent() {
    this.showContent.update( value => !value );
  }

  public toggleQualification() {

    switch (this.count){
      case 1:
       this.grade.update( value => 'B')
        this.count ++;
        break;
      case 2:
       this.grade.update( value => 'C')
        this.count ++;
        break;
      case 3:
        this.grade.update( value => 'D')
         this.count ++;
         break;
      case 4:
         this.grade.update( value => 'E')
         this.count ++;
         break;
      case 5:
         this.grade.update( value => 'F')
         this.count = 0;
         break;
      case 0:
        this.grade.update( value => 'A')
        this.count ++;
        break;
    }

  }

 }
