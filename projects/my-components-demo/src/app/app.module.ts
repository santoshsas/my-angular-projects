import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

//import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare, faSave ,faFile, faClock, faCalendarTimes} from '@fortawesome/free-regular-svg-icons';
//import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import { ComponentsLibModule } from "components-lib";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    ComponentsLibModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(faSave, farSquare, farCheckSquare, faFile, faClock, faCalendarTimes);
  }
 }
