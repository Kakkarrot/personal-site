import { Component, OnInit } from '@angular/core';
import { HomeNavBarComponent } from '../home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-extracurriculars',
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.scss']
})
export class ExtracurricularsComponent implements OnInit {

  constructor(private bar: HomeNavBarComponent) { }

  ngOnInit() {
  	this.bar.displaySection = "Extracurriculars";
  }

}
