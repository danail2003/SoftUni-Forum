import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IPost, ITheme } from 'src/app/core/interfaces';
import { ThemesService } from 'src/app/core/services/themes.service';

@Component({
  selector: 'app-theme-details-page',
  templateUrl: './theme-details-page.component.html',
  styleUrls: ['./theme-details-page.component.css']
})
export class ThemeDetailsPageComponent implements OnInit {
  theme?: ITheme;
  canSubscribe: boolean;

  constructor(private themesService: ThemesService, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  get isLogged(): Observable<boolean> {
    return this.authService.isLogged;
  }

  ngOnInit(): void {
    const themeId = this.activatedRoute.snapshot.params['id'];
    this.themesService.loadThemeById(themeId).subscribe(theme => {
      this.theme = theme;
      this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
    })
  }

  canLike(comment: IPost): boolean {
    return !comment.likes.includes('5fa64b162183ce1728ff371d');
  }
}
