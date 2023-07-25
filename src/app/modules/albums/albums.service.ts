import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from './albums.type';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl: string;
  constructor(private _httpClient: HttpClient) {
    this.apiUrl = environment.urlApi + '/photos';
  }

  /**
   * Get  all album
   * @returns {Photo}
   */
  getAll(): Observable<Photo[]> {
    const url = `${this.apiUrl}`;
    return this._httpClient.get<Photo[]>(url);
  }

  /**
   * Get album by id
   * @param {any} id:number
   * @returns {Photo}
   */
  getById(id: number): Observable<Photo> {
    const url = `${this.apiUrl}/${id}`;
    return this._httpClient.get<Photo>(url);
  }
}
