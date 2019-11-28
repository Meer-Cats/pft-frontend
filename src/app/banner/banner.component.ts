import {Component} from '@angular/core';
import {BannerService} from '../services/banner.service';
import {CurrentUserService} from '../services/current-user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(public s: BannerService, protected  user: CurrentUserService) {
  }
}
