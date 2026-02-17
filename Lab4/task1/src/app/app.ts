import {Component} from '@angular/core';
import { User } from './user';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-user name = "Simran"/>
    <router-outlet/>
  `,
  imports: [User, RouterOutlet],
  styles: `
    :host {
      color: red;
    } 
  `,
})
export class App {
}