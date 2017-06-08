import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTable } from './shared/bootstrap-grid/bootstrap-grid';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MyTable ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
