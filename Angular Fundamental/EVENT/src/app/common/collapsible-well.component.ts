import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent {
  public visible: boolean = true;

  constructor() {}

  public toggleContent(): void {
    this.visible = !this.visible;
  }
}
