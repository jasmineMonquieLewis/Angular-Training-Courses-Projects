import { Component, Input, OnInit } from "@angular/core";
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  //@Output() eventClick = new EventEmitter(); //tells our parent componenet there was a cick/event

  constructor() { }

  ngOnInit() { }

  getTimeClass(time): any {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    const isLatStart = this.event && this.event.time === '10:00 am';

    switch (time) {
      case '8:00 am':
        return { green: isEarlyStart, bold: isEarlyStart };
      case '10:00 am':
        return { red: isLatStart };
      default:
        return {};
    }
  }

  // getStartTimeClass(): any {
  //   const isEarlyStart = this.event && this.event.time === '8:00 am';
  //   return { green: isEarlyStart, bold: isEarlyStart };
  // }
}
