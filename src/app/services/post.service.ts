import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostInterface } from '../pages/home/home.component';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.api_url;

  public getAllPost(): Observable<PostInterface[]> {
    const pathGet = `${this.baseUrl}/post`;
    return this.http.get<PostInterface[]>(pathGet);
  }
  public createPost({
    title,
    contents,
    userId,
  }: {
    title: string;
    contents: string;
    userId: string;
  }) {
    const pathPost = `${this.baseUrl}/post`;
    return this.http.post(pathPost, {
      title,
      contents,
      userId,
    });
  }
  reload$ = new BehaviorSubject<string | null>(null);
  reload() {
    this.reload$.next('active');
  }
}
