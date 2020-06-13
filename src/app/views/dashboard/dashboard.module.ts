import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, UsersListComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
