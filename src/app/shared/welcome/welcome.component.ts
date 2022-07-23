import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private authService: AuthService) { }

  get isLogged(): Observable<boolean> {
    return this.authService.isLogged;
  }

  ngOnInit(): void {
  }

}
