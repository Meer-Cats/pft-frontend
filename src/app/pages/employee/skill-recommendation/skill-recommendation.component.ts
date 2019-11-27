import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeApiService} from '../../../services/employee-api.service';

@Component({
  selector: 'app-skill-recommendation',
  templateUrl: './skill-recommendation.component.html',
  styleUrls: ['./skill-recommendation.component.scss']
})
export class SkillRecommendationComponent implements OnInit {

  public skill = 'Java';
  public loading = false ;

  public employees: Employee[] = [];

  public data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];

  constructor(
    private employeeService: EmployeeApiService
  ) { }

  ngOnInit() {
    this.initEmployees();
  }

  private initEmployees(): void {
    this.loading = true;
    this.employees = this.employeeService.getAll();
    this.loading = false;
  }
}
