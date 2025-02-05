import { Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [],
  template: `<p>user-loaders works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})

export class UsersLoaderComponent {
  constructor() { }


}
