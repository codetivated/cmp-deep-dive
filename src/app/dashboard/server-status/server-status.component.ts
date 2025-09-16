import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
  DestroyRef,
  signal,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef);

  constructor() {
    // console.log('CONSTRUCTOR', this.currentStatus());

    effect(() => {
      console.log('EFFECT - server status changed:', this.currentStatus());
    });
  }

  ngOnInit() {
    console.log('OnInit');
    const interval = setInterval(() => {
      const random = Math.random();
      console.log('Random number: ' + random);

      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      console.log('OnDestroy');
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  // ngOnDestroy() {
  //   console.log('OnDestroy');
  //   clearTimeout(this.interval);
  // }
}
