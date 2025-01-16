import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

export interface PostInterface {
  _id: string;
  title: string;
  contents: string;
  userId: string;
  create_at?: Date;
}

@Component({
  selector: 'app-home',
  imports: [PostComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private postService: PostService) {
    this.postService.getAllPost().subscribe((res) => (this.allPost = res));
    this.postService.reload$.subscribe((res) => {
      if (res) {
        this.postService.getAllPost().subscribe((res) => (this.allPost = res));
      }
    });
  }

  allPost: PostInterface[] = [];
}
