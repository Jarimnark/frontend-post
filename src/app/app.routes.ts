import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PasswordComponent } from './pages/password/password.component';
import { authGuardGuard } from './services/auth-guard.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    canActivate: [authGuardGuard],
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'change-password', component: PasswordComponent },
    ],
  },
];
