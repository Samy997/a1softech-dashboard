import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, UsersListComponent, UserComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
