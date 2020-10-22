import {Component, OnInit} from '@angular/core';
import { User } from '../user';
import {DataService} from '../data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: User[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getUser().then(users => {
      this.users = users;
    })
  }

  selectUser(id: number): void {

  }
}
