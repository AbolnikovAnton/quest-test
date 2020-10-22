import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFlightsComponent } from './user-flights/user-flights.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserFlightsComponent,
    FlightInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
