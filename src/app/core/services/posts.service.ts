import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostsService {
  constructor(private httpClient: HttpClient) { }

  loadPosts(limit?: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
