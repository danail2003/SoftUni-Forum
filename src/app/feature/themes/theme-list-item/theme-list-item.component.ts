import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { ITheme } from '../../../core/interfaces/itheme';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnChanges {
  canSubscribe: boolean = false;

  @Input() theme: ITheme;

  constructor(private userService: UsersService) {

  }

  ngOnChanges(): void {
    this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}
