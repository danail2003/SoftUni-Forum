import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  
  handleLogin(): void {
    this.userService.login();
    this.router.navigate(['/home']);
  }
}
