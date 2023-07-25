import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './posts.type';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl: string;
  constructor(private _httpClient: HttpClient) {
    this.apiUrl = environment.urlApi + '/posts';
  }
  getAlls(): Observable<Post[]> {
    const url = `${this.apiUrl}`;
    return this._httpClient.get<Post[]>(url);
  }

  getCommentsById(id: number): Observable<Comment[]> {
    const url = `${this.apiUrl}/${id}/comments`;
    return this._httpClient.get<Comment[]>(url);
  }
}
