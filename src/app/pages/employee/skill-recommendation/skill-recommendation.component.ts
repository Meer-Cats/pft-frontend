import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
  public selectedEmployeeEmail = '';

  constructor(
    private employeeService: EmployeeApiService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.initEmployees();
  }

  private initEmployees(): void {
    this.loading = true;
    this.employeeService.getAll().subscribe(employees => {
        this.employees = employees;
        this.loading = false;
        console.log(this.employees);
      }
    );
  }

  public selectEmployee(email: string): void {
    this.selectedEmployeeEmail = email;
  }

  public submit(): void {
    this.employeeService.recommend(this.selectedEmployeeEmail).subscribe();
  }
}
