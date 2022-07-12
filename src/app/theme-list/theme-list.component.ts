import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces/itheme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {
  themeList!: ITheme[];

  constructor() { }

  ngOnInit(): void {
    this.themeList=[]
  }

}
