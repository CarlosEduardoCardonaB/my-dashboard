import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterLink ],
  templateUrl: './users.component.html',
  styles: ``,
})

//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class UsersComponent {
  public usersService = inject( UsersService);


}
