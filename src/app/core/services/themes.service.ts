import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITheme } from '../interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemesService {

  constructor(private httpClient: HttpClient) { }

  loadThemes(): Observable<ITheme[]> {
    return this.httpClient.get<ITheme[]>(`${apiUrl}/themes`);
  }
}
