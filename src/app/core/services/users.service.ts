import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces';
import { ICreateUserDto } from '../interfaces/icreate-user-dto';

@Injectable()
export class UsersService {
  currentUser: IUser;

  constructor(private htttClient: HttpClient) { }

  get isLogged(): boolean {
    return !!this.currentUser;
  }

  login(userData: { email: string, password: string }): Observable<IUser> {
    return this.htttClient.post<IUser>(`${environment.apiUrl}/login`, userData, { withCredentials: true })
      .pipe(tap(user => this.currentUser = user));;
  }

  logout(): void {

  }

  register(userData: ICreateUserDto): Observable<IUser> {
    return this.htttClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true });
  }
}
