import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
/**
 * This is Toolbar component which will be container component containing other sub components which will act as toolbar items.
 */
@Component({
  selector: 'my-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() layout: string ="horizontal";
  @Input() styleClass: string;

  constructor() { }

  ngOnInit() {
  }

}
