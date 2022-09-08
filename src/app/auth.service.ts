import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRootState, login, logout } from './auth/state';
import { IUser } from './core/interfaces';
import { ICreateUserDto } from './core/interfaces/icreate-user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = this.store.select(state => state.currentUser);
  isLogged = this.currentUser.pipe(map(user => !!user));
  userProfile: IUser;

  constructor(private httpClient: HttpClient, private store: Store<IRootState>) {
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
    this.store.dispatch(login({ user: newUser }));
  }

  handleLogout(): void {
    this.store.dispatch(logout());
  }

  authenticate(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(profile => this.handleLogin(profile)), catchError(() => { return EMPTY }));
  }
}
