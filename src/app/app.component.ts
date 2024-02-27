import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-banking></app-banking>
    <router-outlet></router-outlet>`,
})
export class AppComponent {}
