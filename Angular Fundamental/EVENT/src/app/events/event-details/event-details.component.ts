import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router'; //allows to route to a page with a paramater passed in 'localhost:4200/events/4'

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: any;

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}