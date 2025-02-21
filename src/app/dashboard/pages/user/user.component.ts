import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  template: `


    @if ( user() ) {
      <app-title [title]="titleLabel()"/>

      <section>

        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
        />

        <div>
          <h3>{{ completeName() }}</h3>
          <p>{{ user()?.email }}</p>
        </div>

      </section>

    }@else {
      <app-title title="Información del usuario"/>
      <hr>
      <p>Cargando información</p>
    }

  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class UserComponent {

  //Con el ActivatedRoute tenemos acceso a los parámetros que llegan por la url
  private route = inject( ActivatedRoute );
  private userService = inject( UsersService );

  //public user = signal<User | undefined>(undefined)

  //De esta manera tomamos un observable como lo que nos llega en el "route" y la volvemos un signal con el toSignal
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.userService.getUserById( id ) )
    )
  );

  public completeName = computed( () => `${this.user()?.first_name} ${this.user()?.last_name}`);

  public titleLabel = computed( () => {
    if(this.user()){
      return `Información del usuario: ${this.completeName()}`;
    }

    return 'Información del usuario';
  } );



  constructor(){

    //En este console.log podemos ver los parámetros que llegan en el route, y podemos ver que es un observable
    //console.log(this.route.params);
    // this.route.params.subscribe( params => {
    //   console.log({params});
    // })
  }

 }
