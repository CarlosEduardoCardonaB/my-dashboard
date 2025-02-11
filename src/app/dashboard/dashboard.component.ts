import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//Estos alias (@shared) se configuran en el tsconfig.json en paths
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';


@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

//Con la palabra "default" podemos usar la ruta directa a este componente en el app.routes.ts
export default class DashboardComponent { }
