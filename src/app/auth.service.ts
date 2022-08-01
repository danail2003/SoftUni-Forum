import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './core/interfaces';
import { ICreateUserDto } from './core/interfaces/icreate-user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = new BehaviorSubject<IUser>(undefined);
  currentUser = this._currentUser.asObservable();
  isLogged = this.currentUser.pipe(map(user => !!user));
  userProfile: IUser;

  constructor(private httpClient: HttpClient) {
  }

  login(userData: { email: string, password: string }): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/login`, userData, { withCredentials: true, observe: 'response' })
      .pipe(map(response => response.body));;
  }

  logout(): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiUrl}/logout`, {}, { withCredentials: true });
  }

  register(userData: ICreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true });
  }

  handleLogin(newUser: IUser): void {
    this._currentUser.next(newUser);
    this.userProfile = newUser;
  }

  handleLogout(): void {
    this._currentUser.next(undefined);
  }

  authenticate(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(profile => this.handleLogin(profile)), catchError(() => { return EMPTY }));
  }
}
