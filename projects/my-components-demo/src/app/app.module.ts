import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsLibModule } from "components-lib";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    ComponentsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
