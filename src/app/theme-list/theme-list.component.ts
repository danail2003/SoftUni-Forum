import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {
  themeList: ITheme[];

  constructor(private themeService: ThemesService) { }

  ngOnInit(): void {
    this.themeService.loadThemes().subscribe(themeList => {
      this.themeList = themeList;
    })
  }

}
