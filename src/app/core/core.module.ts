import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { ThemesService } from './services/themes.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [UsersService, PostsService, ThemesService]
})
export class CoreModule { }
