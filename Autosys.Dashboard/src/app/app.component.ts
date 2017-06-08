import { Component } from '@angular/core';
import { MyTable } from './shared/bootstrap-grid/bootstrap-grid';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <br/> <my-table></my-table>`,
})
export class AppComponent  { name = 'Angular'; }
