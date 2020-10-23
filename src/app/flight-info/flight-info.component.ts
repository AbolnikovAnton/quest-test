import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent implements OnInit {
  flightDetailsSubject = this.dataService.flightDetailsSubject;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
