import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/interfaces';
import { enterEditMode, exitEditMode, IAuthModuleState, profileInitializing } from '../state';
import { currentUserSelector, hasErrorSelector, isEditClickedSelector } from '../state/selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('editProfileForm') editProfile: NgForm;

  isEditClicked$: Observable<boolean> = this.store.select(isEditClickedSelector);
  currentUser$: Observable<IUser> = this.store.select(currentUserSelector);
  hasError$: Observable<boolean> = this.store.select(hasErrorSelector);

  constructor(private router: Router, private store: Store<IAuthModuleState>) { }

  ngOnInit(): void {
    this.store.dispatch(profileInitializing());
    this.hasError$.subscribe((hasError) => {
      if (hasError) {
        this.router.navigate(['/user/login']);
      }
    });

    // this.authService.getProfile$().subscribe({
    //   next: (user) => {
    //     this.store.dispatch(profileLoad({ user: user }));
    //   },
    //   error: () => {
    //   this.router.navigate(['/user/login'])
    //   }
    // })
  }

  enterEditMode(currentUser: IUser): void {
    this.store.dispatch(enterEditMode());

    setTimeout(() => {
      this.editProfile.form.patchValue({
        email: currentUser.email,
        username: currentUser.username,
        'select-tel': currentUser.tel && currentUser.tel.length > 4 ?
          currentUser.tel.substring(0, 4) : '',
        tel: currentUser.tel && currentUser.tel.length > 4 ?
          currentUser.tel.substring(4) : currentUser.tel
      });
    });
  }

  updateProfile(): void {
    this.store.dispatch(exitEditMode());
  }
}
