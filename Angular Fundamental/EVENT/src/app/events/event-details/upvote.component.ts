import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpVoteComponent {
  @Input() public count: number;

  //this is an Input setter
  @Input() public set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }

  @Output() public vote = new EventEmitter();

  public iconColor: string;

  constructor() {}

  onClick() {
    this.vote.emit({});
  }
}
