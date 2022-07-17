import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-themes-page',
  templateUrl: './themes-page.component.html',
  styleUrls: ['./themes-page.component.css']
})
export class ThemesPageComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

}
