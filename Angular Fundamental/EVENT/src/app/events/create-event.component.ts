import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'event-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(
    @Inject(Router) private router: Router
  ) { }

  ngOnInit() {
  }

  public cancel(): void {
    this.router.navigate(['/events']);
  }

}
