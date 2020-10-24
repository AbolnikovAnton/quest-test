import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Flight} from '../flight';

@Component({
  selector: 'app-user-flights',
  templateUrl: './user-flights.component.html',
  styleUrls: ['./user-flights.component.scss']
})
export class UserFlightsComponent implements OnInit {
  userFlightsSubject = this.dataService.usersFlightSubject;
  currentFlightsSubject = this.dataService.currentFlightSubject;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  public getFlightInfo(flight: Flight): void{
    this.dataService.flightDetailsSubject.next(flight);
    this.dataService.currentFlightSubject.next(flight);
  }

}
