import {Component, ViewChild } from '@angular/core';
import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import {map, filter, withLatestFrom } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.scss']
})

@Injectable()
export class HomeNavBarComponent {
  @ViewChild ('drawer', {static: false}) drawer: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver,
              router: Router) {
    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd)
    ).subscribe(_ => this.drawer.close());
  }
  name = 'WILLIE LI';
  displaySection = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
}
