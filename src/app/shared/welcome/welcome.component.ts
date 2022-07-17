import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private userService: UsersService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
  }

}
