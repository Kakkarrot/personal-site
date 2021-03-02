import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Personal Site';
  window: Element;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd) {
        const contentContainer = document.querySelector('.mat-sidenav-content') || this.window;
        contentContainer.scrollTo(0, 0);
      }
    });
  }
}
