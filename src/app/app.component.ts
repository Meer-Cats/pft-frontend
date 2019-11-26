import {Component} from '@angular/core';
import {BannerService} from './services/banner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public s: BannerService) {
    s.show$.next(false);
  }
}
