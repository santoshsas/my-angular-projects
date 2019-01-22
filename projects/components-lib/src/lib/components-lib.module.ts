import { NgModule } from '@angular/core';
import { ComponentsLibComponent } from './components-lib.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ComponentsLibComponent, ToolbarComponent],
  imports: [
  ],
  exports: [ComponentsLibComponent, ToolbarComponent]
})
export class ComponentsLibModule { }
