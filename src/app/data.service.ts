import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public userId: number;

  //workers list
  public async getUser(): Promise<User[]>{
    return await (await fetch('https://interview-mock.herokuapp.com/api/workers/')).json();
  }

}

