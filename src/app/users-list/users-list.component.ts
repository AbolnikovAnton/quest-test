import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {DataService} from '../data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: User[];
  currentUserIdSubject = this.dataService.currentUserIdSubject;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getUser().then(users => {
      this.users = users;
      this.selectUser(users[0].id);
    });
  }

  selectUser(id: number): void {
    this.dataService.getUserFlights(id);
    this.dataService.currentUserIdSubject.next(id);
  }
}
