import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces';
import { ICreateUserDto } from '../interfaces/icreate-user-dto';

@Injectable()
export class UsersService {
  currentUser: IUser;

  constructor(private htttClient: HttpClient) { }
}
