import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeNavBarComponent } from '../home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  bioIntro = "My name is Willie and I am an undergraduate student at the University of Calgary. Currently, I am studying towards a combined BSc/BComm degree in Software Engineering and Finance respectively. I chose this degree path because I discovered a passion for both software development and equity research. ";

  bioSoftware = "As a child, I learned that most of the best technology products have a user friendly interface. Therefore, a good idea could quickly be dismissed if it had a unsatisfactory design - \"quality over quantity.\"";

  bioStocks = "During my high school years, I discovered that I also had an interest in investing. One thing led to another and eventually, I enrolled in and completed a 2-year education program on stocks and options. Using what I learned, I trade weekly and often experiment with different types of investing software - sometimes even writing a little bit of code when my imagination permits. "

  bioSelf = "Outside of software and finance, I am very active. I play basketball, do gymnastics, and go hiking primarily, but I am also open to most kinds of physical activity. When I need to rest, I often indulge in a book. Of the many books that I have read to date, my favourite book is still \"The Seven Habits of Highly Effective People\" - by Stephen R. Covey. I like this book because it is about self improvement; I believe that I can always work to better myself, and by doing so, my work will naturally improve as well. ";

  constructor(private bar: HomeNavBarComponent) { }

  ngOnInit() {
  	this.bar.displaySection = "About Me";
    window.scrollTo(2000, 2000);
  }

}
