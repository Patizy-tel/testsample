import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Schedule', url: '/home', icon: 'paper-plane' },
    { title: 'Booking', url: '/home/bookings', icon: 'heart' },
    { title: 'Message', url: '/home/messages', icon: 'mail' },
    { title: 'Logout', url: '/', icon: 'user' },
  ];

  constructor() {}
}
