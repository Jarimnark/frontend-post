import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.api_url;

  public login(
    username: string,
    password: string
  ): Observable<{ message: string; user: { id: string; username: string } }> {
    const pathPost = `${this.baseUrl}/user/login`;
    return this.http.post<{
      message: string;
      user: { id: string; username: string };
    }>(pathPost, { username, password });
  }

  public register(username: string, password: string) {
    const pathPost = `${this.baseUrl}/user`;
    return this.http.post(pathPost, { username, password });
  }

  public collectInfo({ id, username }: { id: string; username: string }) {
    localStorage.setItem('id', id);
    localStorage.setItem('username', username);
    localStorage.setItem('login', 'true');
  }

  public changePassword(password: string, id: string) {
    const pathPut = `${this.baseUrl}/user/password/${id}`;
    return this.http.put(pathPut, { password });
  }

  public getUserName(id: string) {
    const pathGet = `${this.baseUrl}/user/${id}`;
    return this.http.get<{ name: string }>(pathGet);
  }
}
