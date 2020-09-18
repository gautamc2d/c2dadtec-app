import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/services/PageTitle/page-title.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  constructor(private data: PageTitleService) { }

  ngOnInit(): void {
    this.data.changeTitle("Location Listing- OfficeFloor_2");
  }

}
