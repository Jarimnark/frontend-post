import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private user: UserService, private router: Router) {}

  public username: string = '';
  public password: string = '';

  regist() {
    this.user.register(this.username, this.password).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/login');
    });
  }
}
