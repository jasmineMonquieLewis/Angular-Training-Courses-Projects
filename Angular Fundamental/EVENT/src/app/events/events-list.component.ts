import { Component, OnInit, Inject } from "@angular/core";
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // selector: "events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  public events: any;

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
