import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.scss']
})

@Injectable()
export class HomeNavBarComponent {

  constructor(private breakpointObserver: BreakpointObserver) {
  }
  name = 'WILLIE LI';
  displaySection = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
}
