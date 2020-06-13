import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonAuthGuard } from './guards/non-auth/non-auth.guard';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    canActivate: [NonAuthGuard],
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
