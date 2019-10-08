import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
import { IEvent } from './shared/event.model';
import { Observable } from 'rxjs';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(@Inject(EventService) private eventService: EventService) {}

  public resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
