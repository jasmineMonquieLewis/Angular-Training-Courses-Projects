import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
  // selector: "events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  public events: IEvent[];

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
