import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  @if (visible) {
    <section [ngClass]="['w-full h-[600px]', cssClass]" visible>
      Heavy Loader Slow
    </section>
  }

  `,


})
export default class HeavyLoadersSlowComponent {

  public visible: boolean = false;

  @Input({ required: true }) cssClass!: string;


  constructor(){

    //Esto sirve para cargar un poco el componente y alcanzar a ver el defer
    for(var i=0; i < 20000; i++){
        if(i == 19999){
          this.visible = true;
        }
        if( i % 20 == 0){
          console.log(i);
        }
    }

    // setTimeout(() => {
    //   this.visible = true;
    // }, 3000);
    console.log('Heavy loader component');
  }
 }
