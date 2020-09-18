import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DefaultComponent } from './layout/default/default.component';
import { AddNewLocationComponent } from './modules/add-new-location/add-new-location.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
<<<<<<< Updated upstream
=======
import { EditLocationComponent } from './modules/edit-location/edit-location.component';
import { LocationListingComponent } from './modules/location-listing/location-listing.component';
import { ReportsComponent } from './modules/reports/reports.component';
>>>>>>> Stashed changes


const routes: Routes = [{
  path:'',
  // component: LoginComponent,
  children: [{
    path:'',
    component: LoginComponent
  },
  {
    path:'app',
    component: DefaultComponent,
    children: [  {
      path:'dashboard',
      component: DashboardComponent
<<<<<<< Updated upstream
=======
    },
    {
      path:'location',
      component: LocationListingComponent
    },
    {
      path:'edit_location',
      component: EditLocationComponent
    },
    {
      path:'reports',
      component: ReportsComponent
    },
    {
      path:'add_new_location',
      component: AddNewLocationComponent
>>>>>>> Stashed changes
    }]
  }]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
