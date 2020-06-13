import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser;
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.usersService
      .getUser(this.authService.Token.id || 4)
      .subscribe((res) => {
        this.currentUser = res['data'];
      });
  }

  logout() {
    if (confirm('Do you really want to logout?')) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
