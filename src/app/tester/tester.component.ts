import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  title = "test angular8";
  constructor() { }

  ngOnInit() {
  }

}
