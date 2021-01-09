import { Component, OnInit } from '@angular/core';
import { HomeNavBarComponent } from '../home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private bar: HomeNavBarComponent) { }

  ngOnInit() {
  	this.bar.displaySection = "Work Experience";
  }

}
