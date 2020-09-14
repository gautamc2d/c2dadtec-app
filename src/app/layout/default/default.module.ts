import { NgModule } from '@angular/core';
import {DefaultComponent} from './default.component';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class DefaultModule { }
