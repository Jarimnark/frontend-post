import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommonModule } from '@angular/common';
import { DatewithTimePipe } from '../../pipe/datewith-time.pipe';
import { UserService } from '../../services/user.service';

export interface CommentInterface {
  comment: string;
  user: string;
  post: string;
  create_at: Date;
}

@Component({
  selector: 'app-comment',
  imports: [CommonModule, DatewithTimePipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent implements OnInit {
  constructor(private comment: CommentService, private user: UserService) {}

  mapName: { [key: string]: string } = {};
  @Input() postId!: string;
  ngOnInit(): void {
    this.updateComment();
  }

  AllComment: CommentInterface[] = [];

  updateComment() {
    this.comment.getComment(this.postId).subscribe((res) => {
      this.AllComment = res;
      console.log(res);
      this.AllComment.map((c) => {
        c.create_at = new Date(c.create_at);
        if (c.user) {
          this.user.getUserName(c.user).subscribe((res) => {
            console.log(res);
            this.mapName[c.user] = res.name;
          });
        }
      });
    });
  }
}
