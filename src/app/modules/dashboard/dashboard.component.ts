import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PageTitleService } from '../../services/PageTitle/page-title.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteListingComponent } from 'src/app/dialogs/delete-listing/delete-listing.component';

export interface PeriodicElement {
  locationName: string;
  alarmsEvents: string;
  voltage: number;
  roomTemp: number;
  actions: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {locationName: 'OfficeFloor_1', alarmsEvents: 'Low Voltage', voltage: 95, roomTemp: 24, actions: ''},
  {locationName: 'OfficeFloor_2', alarmsEvents: 'Low Temperature', voltage: 95, roomTemp: 24, actions: ''},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  
  constructor(private data: PageTitleService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.changeTitle("Location Listing");
  }

  displayedColumns: string[] = ['locationName', 'alarmsEvents', 'voltage', 'roomTemp', 'actions'];
  // dataSource = ELEMENT_DATA;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  openDialog(){
    this.dialog.open(DeleteListingComponent);
  }
}
