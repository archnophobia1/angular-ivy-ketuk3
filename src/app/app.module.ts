import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule ],
  exports:[MatIconModule],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
