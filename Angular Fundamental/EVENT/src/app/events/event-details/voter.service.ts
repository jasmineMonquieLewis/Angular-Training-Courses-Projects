import { Injectable } from '@angular/core';
import { ISession } from '../shared/session.model';

@Injectable()
export class VoterService {
  constructor() {}

  addVoter(session: ISession, voterName: string): void {
    session.voters.push(voterName);
  }

  deleteVoter(session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }
}
