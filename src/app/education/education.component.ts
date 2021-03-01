import {Component, OnInit} from '@angular/core';
import {HomeNavBarComponent} from '../home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private bar: HomeNavBarComponent) {
  }

  ngOnInit() {
    this.bar.displaySection = 'Education';
  }

}
