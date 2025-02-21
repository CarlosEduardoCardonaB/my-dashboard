import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';


interface State {
  users: User[];
  loading: boolean
}

@Injectable({providedIn: 'root'})
export class UsersService {

  private http = inject(HttpClient);

  //Declarar la variable con un # o con un private es lo mismo. (private state = #state) y al transpilar a javascript es recomendable usar el # en vez del private
  #state = signal<State>({
    loading: true,
    users: [],
  })

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(500))
      .subscribe( res=> {
        this.#state.set({
          loading: false,
          users: res.data,
        })
      })

    //console.log("Cargando data...");
   }

   getUserById(id: string){
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(500),
        map( resp => resp.data )
      )


    //console.log("Cargando data...");
   }

}
