import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TitleComponent { }
