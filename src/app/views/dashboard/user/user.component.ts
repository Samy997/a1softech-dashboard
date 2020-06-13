import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../users-list/users-list.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId: number;
  user: IUser;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.userId = JSON.parse(params.get('id'));
      this.getUser();
    });
  }

  ngOnInit(): void {}

  getUser() {
    this.usersService.getUser(this.userId).subscribe((res) => {
      this.user = res['data'];
    });
  }
}
