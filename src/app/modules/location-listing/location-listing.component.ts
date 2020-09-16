import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/services/PageTitle/page-title.service';

@Component({
  selector: 'app-location-listing',
  templateUrl: './location-listing.component.html',
  styleUrls: ['./location-listing.component.css']
})
export class LocationListingComponent implements OnInit {

  constructor(private data: PageTitleService) { }

  ngOnInit(): void {
    this.data.changeTitle("OfficeFloor_1");
  }

}
