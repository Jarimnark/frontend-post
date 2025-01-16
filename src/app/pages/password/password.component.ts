import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-password',
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
})
export class PasswordComponent {
  constructor(private user: UserService) {}
  password = '';
  id = localStorage.getItem('id') || '';
  confirmChangePassword() {
    this.user.changePassword(this.password, this.id);
  }
}
