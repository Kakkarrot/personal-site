import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Inject } from '@angular/core';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  name = "Willie Li";
  title = 'Personal Site';
  description = "";

  window: Element;

  constructor(private router: Router) { }

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
