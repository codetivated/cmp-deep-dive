import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // this is used to store the interval reference so we can clear it later
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {
    console.log('OnInit');
    this.interval = setInterval(() => {
      const random = Math.random();
      console.log('Random number: ' + random);

      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
    clearTimeout(this.interval);
  }
}
