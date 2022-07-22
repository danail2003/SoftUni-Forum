import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) { }

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

  }
}
