import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user-flights',
  templateUrl: './user-flights.component.html',
  styleUrls: ['./user-flights.component.scss']
})
export class UserFlightsComponent implements OnInit {
  userFlightsSubject = this.dataService.usersFlightSubject;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
