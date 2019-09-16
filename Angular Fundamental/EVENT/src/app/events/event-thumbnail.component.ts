import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  //@Output() eventClick = new EventEmitter(); //tells our parent componenet there was a cick/event

  constructor() { }

  ngOnInit() { }

  public getTimeClass(time): any {
    const IS_EARLY_START = this.event && this.event.time === '8:00 am';
    const IS_LATE_START = this.event && this.event.time === '10:00 am';

    switch (time) {
      case '8:00 am':
        return { green: IS_EARLY_START, bold: IS_EARLY_START };
      case '10:00 am':
        return { red: IS_LATE_START };
      default:
        return {};
    }
  }
}
