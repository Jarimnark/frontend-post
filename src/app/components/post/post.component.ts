import { Component, Inject, Input, ViewChild } from '@angular/core';
import { PostInterface } from '../../pages/home/home.component';
import { CommentComponent } from '../comment/comment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-post',
  imports: [CommentComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor(public dialog: MatDialog) {}

  @Input() post!: PostInterface;
  @ViewChild('commentCom') com!: CommentComponent;
  popupComment() {
    const dialog = this.dialog.open(popupComment, {
      height: '60vh',
      width: '70vw',
      data: this.post,
    });
    dialog.afterClosed().subscribe((res) => {
      this.com.updateComment();
    });
  }
}

@Component({
  selector: 'app-post-popup',
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './popupComment.html',
  styleUrl: './post.component.css',
})
export class popupComment {
  constructor(
    private user: UserService,
    private commentService: CommentService,
    public dialog: MatDialogRef<popupComment>,
    @Inject(MAT_DIALOG_DATA)
    public data: PostInterface
  ) {
    this.post = data;
  }
  url = '';
  id = localStorage.getItem('id') || '';
  post!: PostInterface;
  title = '';
  comment = '';

  createComment() {
    this.commentService
      .createComment({
        comment: this.comment,
        userId: this.id,
        postId: this.post._id,
      })
      .subscribe((res) => {
        this.dialog.close();
      });
  }
}
