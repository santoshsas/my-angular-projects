import { Component, OnInit, Input } from '@angular/core';
/**
 * This is Toolbar component which will be container component containing other sub components which will act as toolbar items.
 */
@Component({
  selector: 'my-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() layout: string= "vertical";
  @Input() styleClass: string;

  constructor() { }

  ngOnInit() {
  }

}
