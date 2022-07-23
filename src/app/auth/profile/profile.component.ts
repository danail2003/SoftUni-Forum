import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('editProfileForm') editProfile: NgForm;

  isEditClicked: boolean = false;
  currentUser: IUser;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
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
