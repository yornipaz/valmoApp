import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './users.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl: string;
  constructor(private _httpClient: HttpClient) {
    this.apiUrl = environment.urlApi + '/users';
  }
  getAll(): Observable<User[]> {
    const url = `${this.apiUrl}`;
    return this._httpClient.get<User[]>(url);
  }

  getById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this._httpClient.get<User>(url);
  }
}
