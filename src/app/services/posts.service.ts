import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosts } from '../interfaces/iposts';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostsService {
  constructor(private httpClient: HttpClient) { }

  loadPosts(limit?: number): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
