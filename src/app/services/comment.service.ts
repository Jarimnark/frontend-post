import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../components/comment/comment.component';
import { environment } from '../../environment/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.api_url;

  public getComment(id: string): Observable<CommentInterface[]> {
    const pathGet = `${this.baseUrl}/comment/${id}`;
    return this.http.get<CommentInterface[]>(pathGet);
  }

  public createComment({
    comment,
    userId,
    postId,
  }: {
    comment: string;
    userId: string;
    postId: string;
  }) {
    const pathPost = `${this.baseUrl}/comment`;
    return this.http.post(pathPost, {
      comment,
      userId,
      postId,
    });
  }
}
