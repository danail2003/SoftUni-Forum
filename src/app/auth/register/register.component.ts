import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ICreateUserDto } from 'src/app/core/interfaces/icreate-user-dto';
import { emailValidator, passwordMatch } from '../utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(5)])

  get passwordGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'email': new FormControl('', [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': this.passwordFormControl,
      'rePassword': new FormControl('', passwordMatch(this.passwordFormControl))
    }),
    'tel': new FormControl(),
    'telRegion': new FormControl()
  })

  ngOnInit(): void {
  }

  register(): void {
    const { username, passwords, email, tel, telRegion } = this.registerFormGroup.value;

    const body: ICreateUserDto = {
      username,
      password: passwords.password,
      email,
      ...(!!tel && { tel: telRegion + tel })
    }

    this.authService.register(body).subscribe(()=>{
      this.router.navigate(['/home']);
    });
  }
}
