import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.scss']
})

@Injectable()
export class HomeNavBarComponent {
  name = "WILLIE LI";
  displaySection = "";

  newSection(name) {
    this.displaySection = name.type;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
