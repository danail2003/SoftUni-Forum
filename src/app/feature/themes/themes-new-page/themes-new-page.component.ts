import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemesService } from 'src/app/core/services/themes.service';

@Component({
  selector: 'app-themes-new-page',
  templateUrl: './themes-new-page.component.html',
  styleUrls: ['./themes-new-page.component.css']
})
export class ThemesNewPageComponent implements OnInit {

  constructor(private router: Router, private themesService: ThemesService) { }

  ngOnInit(): void {
  }

  createNewTheme(newTheme: NgForm): void {
    this.themesService.createTheme(newTheme.value).subscribe(() => {
      this.router.navigate(['/themes']);
    })
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
