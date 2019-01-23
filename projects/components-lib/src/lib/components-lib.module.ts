import { NgModule,  } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ComponentsLibComponent } from './components-lib.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ComponentsLibComponent, ToolbarComponent],
  imports: [CommonModule
  ],
  exports: [ComponentsLibComponent, ToolbarComponent]
})
export class ComponentsLibModule { }
