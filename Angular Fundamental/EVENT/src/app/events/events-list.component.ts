import { Component, OnInit, Inject } from "@angular/core";
import { EventService } from './shared/event.service';

@Component({
  // selector: "events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(@Inject(EventService) private eventService: EventService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
