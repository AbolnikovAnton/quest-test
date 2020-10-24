import {Injectable} from '@angular/core';
import {User} from './user';
import {Flight} from './flight';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.usersFlightSubject = new BehaviorSubject<Flight[]>(null);
    this.flightDetailsSubject = new BehaviorSubject<Flight>(null);
    this.currentUserIdSubject = new BehaviorSubject<number>(null);
    this.currentFlightSubject = new BehaviorSubject<Flight>(null);
    this.checker();
  }

  public userId: number;
  public usersFlightSubject: BehaviorSubject<Flight[]>;
  public flightDetailsSubject: BehaviorSubject<Flight>;
  public currentUserIdSubject: BehaviorSubject<number>;
  public currentFlightSubject: BehaviorSubject<Flight>;


  //workers list
  public async getUser(): Promise<User[]> {
    return await (await fetch('https://interview-mock.herokuapp.com/api/workers/')).json();
  }

  public async getUserFlights(id: number): Promise<void> {
    const userFlights = await (await fetch('https://interview-mock.herokuapp.com/api/workers/' + id)).json();
    this.usersFlightSubject.next(userFlights);

    this.flightDetailsSubject.next(this.currentFlightSubject.value || userFlights[0]);
  }

  public checker(): void {
    console.log(1);
    if (!!this.currentUserIdSubject && !!this.currentUserIdSubject.value) {
      this.getUserFlights(this.currentUserIdSubject.value);
    }
    // setTimeout(this.checker, 5000);
    setTimeout(() => {
      this.checker();
    }, 5000);
  }

}

