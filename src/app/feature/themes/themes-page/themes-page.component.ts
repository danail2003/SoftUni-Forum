import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-themes-page',
  templateUrl: './themes-page.component.html',
  styleUrls: ['./themes-page.component.css']
})
export class ThemesPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  get isLogged(): Observable<boolean> {
    return this.authService.isLogged;
  }

}
