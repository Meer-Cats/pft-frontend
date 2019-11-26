import {Component} from '@angular/core';
import {BannerService} from '../../services/banner.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  constructor(private s: BannerService) {
    s.show$.next(true);
  }
}
