import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  page: number = 1;
  users: IUser[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.listUsers();
  }

  private listUsers() {
    this.usersService.getAllUsers(this.page).subscribe((res) => {
      this.users = res['data'];
    });
  }
}
