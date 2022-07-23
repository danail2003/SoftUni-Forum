import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUser: Observable<IUser> = this.authService.currentUser;
  isLogged = this.authService.isLogged;

  constructor(private authService: AuthService, private router: Router) { }

  handleLogout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
