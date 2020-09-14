import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  toggle: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  receiveToogle($event) {
    this.toggle = $event;
  }

  toogleSideNav() {
    this.toggle ? false :true;
  }
}
