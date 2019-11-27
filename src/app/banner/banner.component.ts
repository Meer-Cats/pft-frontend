import {Component} from '@angular/core';
import {BannerService} from '../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(private s: BannerService) {
  }
}
