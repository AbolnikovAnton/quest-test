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
  }

  public userId: number;
  public usersFlightSubject: BehaviorSubject<Flight[]>;

  //workers list
  public async getUser(): Promise<User[]> {
    return await (await fetch('https://interview-mock.herokuapp.com/api/workers/')).json();
  }

  public async getUserFlights(id: number): Promise<void> {
    const userFlights = await (await fetch('https://interview-mock.herokuapp.com/api/workers/' + id)).json();
    this.usersFlightSubject.next(userFlights);
  }

}

