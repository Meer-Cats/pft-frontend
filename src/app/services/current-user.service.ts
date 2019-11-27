import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public currentUser$ = new BehaviorSubject<User>(null);

  constructor() {
  }
}
