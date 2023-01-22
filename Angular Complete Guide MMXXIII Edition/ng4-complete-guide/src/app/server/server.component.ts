import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  public serverID: number = 10;
  public serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  public getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  public getServerStatus() {
    return this.serverStatus;
  }
}
