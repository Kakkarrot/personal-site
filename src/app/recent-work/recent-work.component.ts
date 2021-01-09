import { Component, OnInit } from '@angular/core';
import { HomeNavBarComponent } from '../home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss']
})
export class RecentWorkComponent implements OnInit {

  SARP1 = 'As my experience in software engineering slowly accumulated, the questions that plagued my mind began to ' +
    'change. When I first started out, my designs only accounted for the features that I developed, ' +
    'or how I envisioned the final product. Architecture was never a primary concern and performance ' +
    'was rarely an issue. However, as my projects increase in magnitude, with no more time to spare, ' +
    'I found myself invested in not only the final product but also the development process. ';

  SARP2 = 'I took some time to research a few common design patterns, with a focus on web applications. ' +
    'Issues that interested me included scalability, data-consistency, but most importantly, ' +
    'the ability to develop across a team with a given architecture. The paper can be found below. ';

  OVRP1 = 'Ever since high school, I have been an avid trader in the equity markets. I started off ' +
    'with stocks and ETFs, and took positions based on a mix of fundamental and technical analysis. ' +
    'However, it was not long after that I was introduced to a various other financial instruments, ' +
    'one of which being options. There were several appealing characteristics about options, which ' +
    'made them appear vastly superior to all the other financial instruments out there. One, was the ' +
    'ability to realize profits regardless of market conditions, while the other was how incredibly ' +
    'complicated the mathematics of these derivative instruments could become. ';

  OVRP2 = 'During my time on the University of Calgary Trading Team, I learned of the Rotman ' +
    'International Trading Competition, which featured a Black-Scholes options case. Although ' +
    'I had always known how to navigate the Greeks when executing trades, I had yet to work ' +
    'out the mathematics behind them. Aside from the algorithmic trading cases, this was the ' +
    'only other case that allowed for API order entry. I built what would become the most robust ' +
    'options case model that the team had access to, going as far as to identify new ' +
    'opportunities which the team had no prior knowledge on or ability to trade. This was ' +
    'only the starting point for me. Later, I would go on to apply the concepts from the case ' +
    'to real markets, ultimately producing the paper below. ';

  deadlock1 = 'In a system of only processes and resources - where there is only one instance of every resource - if there ' +
    'exists a cycle, then there must be a deadlock. ';

  deadlock2 = 'In the above picture, there are 2 resources (R1, R2) and 3 processes (P1, P2, P3). An outgoing edge from a process to a ' +
    'resource means that a process is waiting for the resource, while an outgoing edge from a resource to a process means that the' +
    ' resource is held by the process. Since there is a cycle, there is a deadlock in the system. P3 and P2 are in a deadlock. I wrote' +
    ' a C++ program on linux that checks the aforementioned system for deadlocks. The input file for the above system must be ' +
    'configured as follows: ';

  deadlockInput = '1 <- 1\n3 <- 1\n3 -> 2\n2 <- 2\n2 -> 1';

  deadlockInput2 = 'The program only supports inputs where process and resource numbers range from 0 to 100 000 inclusive ' +
    'where input cases can have up to a maximum of 100 000 lines of input (graph edges). ';

  deadlock3 = 'All process numbers are on the left hand side of the arrow and all resource numbers are on the right hand ' +
    'side of the arrow. If there is a cycle, my program will print out a sorted list of all deadlocked processes. ' +
    'The program and a sample input file can be found below. ';

  technicalAnalysis1 = 'A non-traditional way of valuing equities is through technical analysis. ' +
    'Technical analysis does not look at the value of the underlying assets, but instead relies on an efficient market ' +
    'hypothesis and price action of the equity powered by supply and demand. By itself, technical ' +
    'analysis provides little insight into the value of a company, but it can support an investment thesis. ';

  technicalAnalysis2 = 'During my time as a sector head with Finesse Wealth Management (FMW), ' +
    'my team looked to value stocks fundamentally but wished to incorporate some technical analysis ' +
    'to not only support the investment thesis but also identify ideal entry and exit prices. Eventually, ' +
    'it became a standard in FMW to include both fundamental analysis and technical analysis in stock pitches. ' +
    'However, I soon found that not everyone had a good background in technical analysis, ' +
    'as it was not usually covered in classes, and I would spend a fair bit of time every week teaching ' +
    'different parts of it to different people. Thus, I put together a comprehensive guide to technical ' +
    'analysis and distributed it within FMW. The guide can be found below: ';

  DMAD = 'For the purpose of book keeping and auditing, companies must keep records of their expenses. ' +
    'One way of doing this is keeping receipts. However, receipts tend to get damaged and faded over time. ' +
    'To solve this problem, my team and I decided to develop an expense handler, so that companies will be ' +
    'able to store and process their receipts electronically. This completely eliminates the need for a paper copy. ';

  DMAD2 = 'A simplifed overview of the system in mind includes a secretary and an employee. ' +
    'When employees recieve a receipt, they will take a picture of it and fill in a few details. ' +
    'Then they will store the picture of the receipt and associated details in a company database. ' +
    'The secretary can process these receipts in the database and generate a report for auditing purposes later if necessary. ';

  DMAD3 = 'I decided to take on the design aspect of the project. With the system requirements in mind, ' +
    'I created an enhanced entity relationship diagram (EERD) and mapped it to a relational schema. ' +
    'Both the EERD and relational schema can be found below: ';

  constructor(private bar: HomeNavBarComponent) { }

  ngOnInit() {
    // tslint:disable-next-line:indent
  	this.bar.displaySection = 'Recent Work';
  }

}
