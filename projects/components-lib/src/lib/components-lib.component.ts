import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-components-lib',
  template: `
    <p>
      components-lib works!
    </p>
  `,
  styles: []
})
export class ComponentsLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
