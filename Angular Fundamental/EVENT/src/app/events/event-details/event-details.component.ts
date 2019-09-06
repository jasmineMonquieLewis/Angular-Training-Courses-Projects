import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router'; //allows to route to a page with a paramater passed in 'localhost:4200/events/4'

@Component({
  //selector: 'event-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    @Inject(EventService) private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    //route is used in the constructor so we do not have to declare a class property
    //+ casts to a number


    //let id: number | string;
    // let id = this.route.snapshot.paramMap.get('id');
    // this.eventService.getEvent(id).
    //   subscribe(event => this.event = event);
  }

}
