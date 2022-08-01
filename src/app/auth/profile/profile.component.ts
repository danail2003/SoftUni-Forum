import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/core/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('editProfileForm') editProfile: NgForm;

  isEditClicked: boolean = false;
  currentUser: IUser;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.userProfile;
  }

  enterEditMode(): void {
    this.isEditClicked = true;

    setTimeout(() => {
      this.editProfile.form.patchValue({
        email: this.currentUser.email,
        username: this.currentUser.username,
        'select-tel': this.currentUser.tel && this.currentUser.tel.length > 4 ?
          this.currentUser.tel.substring(0, 4) : '',
        tel: this.currentUser.tel && this.currentUser.tel.length > 4 ?
          this.currentUser.tel.substring(4) : this.currentUser.tel
      });
    });
  }

  updateProfile(): void {
    this.isEditClicked = false;
  }
}
