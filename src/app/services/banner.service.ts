import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  public show$ = new BehaviorSubject(true);
  constructor() {
  }
}
