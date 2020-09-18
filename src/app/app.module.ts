import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { DefaultModule } from './layout/default/default.module';
<<<<<<< Updated upstream
=======
import { LocationListingComponent } from './modules/location-listing/location-listing.component';
import { EditLocationComponent } from './modules/edit-location/edit-location.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';  
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DeleteListingComponent } from './dialogs/delete-listing/delete-listing.component'; 
import {MatButtonModule} from '@angular/material/button';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    LoginComponent
=======
    LoginComponent,
    LocationListingComponent,
    EditLocationComponent,
    DeleteListingComponent,
  ],
  entryComponents: [
    DeleteListingComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    DefaultModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
