import { Component, Input, OnChanges, Inject, EventEmitter, Output } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];

  @Input() count: number;
  @Input() voted: boolean;

  @Output() vote = new EventEmitter();

  constructor(
    @Inject(AuthService) public authService: AuthService,
    @Inject(VoterService) private voterService: VoterService
  ) {}

  ngOnChanges(): void {
    //check to see if sessions is set
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  public filterSessions(filter: string): void {
    if (filter === 'all') {
      //cloning the sessions array by creating a duplicate
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  public toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.authService.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  public userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }
}

function sortByNameAsc(s1: ISession, s2: ISession): number {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession): number {
  return s2.voters.length - s1.voters.length;
}
