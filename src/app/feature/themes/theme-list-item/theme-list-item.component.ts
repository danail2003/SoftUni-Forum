import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ITheme } from '../../../core/interfaces/itheme';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnChanges {
  canSubscribe: boolean = false;

  @Input() theme: ITheme;

  constructor(private authService: AuthService) {

  }

  ngOnChanges(): void {
    this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
  }

  get isLogged(): Observable<boolean> {
    return this.authService.isLogged;
  }
}
