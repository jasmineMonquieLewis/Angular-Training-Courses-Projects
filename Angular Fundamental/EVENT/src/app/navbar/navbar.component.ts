import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(
    @Inject(AuthService) public authService: AuthService,
    @Inject(EventService) public eventService: EventService
  ) {}

  ngOnInit() {}

  public searchSessisons(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
