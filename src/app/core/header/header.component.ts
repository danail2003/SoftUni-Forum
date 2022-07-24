import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces';
import { MessageBusService, MessageType } from '../message-bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: string;
  isMessageError: boolean;
  currentUser: Observable<IUser> = this.authService.currentUser;
  isLogged = this.authService.isLogged;

  constructor(private authService: AuthService, private router: Router, private messageBus: MessageBusService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.messageBus.onNewMessage.subscribe(newMessage => {
      this.message = newMessage?.text || '';
      this.isMessageError = newMessage?.messageType === MessageType.Error;

      if (this.message) {
        setTimeout(() => {
          this.messageBus.clear();
        }, 3000);
      }
    })
  }

  handleLogout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
