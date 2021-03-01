import {Component, OnInit} from '@angular/core';
import {HomeNavBarComponent} from '../home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  constructor(private bar: HomeNavBarComponent) {
  }

  ngOnInit() {
    this.bar.displaySection = 'Contact Information';
  }

}
