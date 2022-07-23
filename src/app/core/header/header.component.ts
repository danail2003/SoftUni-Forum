import { Component } from '@angular/core';
import { IUser } from '../interfaces';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UsersService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get currentUser(): IUser {
    return this.userService.currentUser;
  }

  handleLogout(): void {
    this.userService.logout();
  }
}
