import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public isDirty: boolean = true;
  public newEvent;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(EventService) private eventService: EventService
  ) { }

  ngOnInit() {
  }

  public saveEvent(formValues): void {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  public cancel(): void {
    this.router.navigate(['/events']);
  }

}
