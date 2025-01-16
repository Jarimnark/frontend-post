import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule, MatDialogModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  constructor(private router: Router, public dialog: MatDialog) {
    this.url = this.router.url;
  }
  url = '';
  username = localStorage.getItem('username');
  popupPost() {
    const dialog = this.dialog.open(popupPost, { height: '60vh' });
    this.dialog.afterAllClosed.subscribe((res) => {});
  }
}

@Component({
  selector: 'app-post-popup',
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './popupPost.html',
  styleUrl: './layout.component.css',
})
export class popupPost {
  constructor(
    private postService: PostService,
    public dialog: MatDialogRef<popupPost>
  ) {}
  url = '';
  id = localStorage.getItem('id') || '';

  title = '';
  contents = '';

  createPost() {
    this.postService
      .createPost({
        title: this.title,
        contents: this.contents,
        userId: this.id,
      })
      .subscribe((res) => {
        this.postService.reload();
        this.dialog.close();
      });
  }
}
