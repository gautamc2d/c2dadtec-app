import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PageTitleService } from 'src/app/services/PageTitle/page-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle: boolean = true;

  @Output() toggleEvent = new EventEmitter<boolean>();

  pageTitle: string;

  constructor(private data: PageTitleService) { }

  ngOnInit(): void {
    this.data.currentTitle.subscribe(pageTitle => this.pageTitle = pageTitle);
    console.log(this.pageTitle)
  }

  sendToggle() {
    this.toggle = !this.toggle;
    this.toggleEvent.emit(this.toggle);
  }
}
