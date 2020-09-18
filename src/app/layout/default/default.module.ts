import { NgModule } from '@angular/core';
import {DefaultComponent} from './default.component';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
<<<<<<< Updated upstream
=======
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';   
import {MatNativeDateModule} from '@angular/material/core';
import {ReportsComponent} from '../../modules/reports/reports.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';  
import { MatSelectModule } from '@angular/material/select';
import {AddNewLocationComponent} from '../../modules/add-new-location/add-new-location.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ReportsComponent,
    AddNewLocationComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
<<<<<<< Updated upstream
    MatPaginatorModule
=======
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
>>>>>>> Stashed changes
  ]
})
export class DefaultModule { }
