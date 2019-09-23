import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router'; //allows to route to a page with a paramater passed in 'localhost:4200/events/4'
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: IEvent;
  public addMode: boolean;

  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  public addSession(): void {
    this.addMode = true;
  }

  public saveNewSession(session: ISession): void {
    //get max number of current session Ids
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    //then set id of new session plus one
    session.id = nextId + 1;

    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  public cancelAddSession(): void {
    this.addMode = false;
  }
}