import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private user: UserService, private router: Router) {}

  public username: string = '';
  public password: string = '';

  submitLogin() {
    this.user.login(this.username, this.password).subscribe((res) => {
      this.user.collectInfo(res.user);
      this.router.navigateByUrl('/home');
    });
  }

  regist() {
    this.router.navigateByUrl('/register');
  }
}
