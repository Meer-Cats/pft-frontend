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
  public selectedEmployeesEmails: Set<string> = new Set<string>();

  constructor(
    private employeeService: EmployeeApiService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.initEmployees();
  }

  private initEmployees(): void {
    this.loading = true;
    this.employees = this.employeeService.getAll();
    this.loading = false;
  }

  public selectEmployee(email: string): void {
    if (this.selectedEmployeesEmails.has(email)) {
      this.selectedEmployeesEmails.delete(email);
    } else {
      this.selectedEmployeesEmails.add(email);
    }
  }

  public submit(): void {}
}
