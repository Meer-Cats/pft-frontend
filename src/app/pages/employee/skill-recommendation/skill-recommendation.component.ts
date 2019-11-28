import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeApiService} from '../../../services/employee-api.service';
import {Question} from '../../../models/question';
import {DomSanitizer} from '@angular/platform-browser';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-skill-recommendation',
  templateUrl: './skill-recommendation.component.html',
  styleUrls: ['./skill-recommendation.component.scss']
})
export class SkillRecommendationComponent implements OnInit {

  public question: Question = {key: 'null', message: 'Retrieve question from server'};
  public loading = false;
  public filteredEmployees: Employee[] = [];
  public selectedEmployeeEmail = '';
  private employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeApiService,
    private sanitizer: DomSanitizer,
    private notificationService: NzNotificationService,
  ) {
  }

  ngOnInit() {
    this.initEmployees();
    this.initQuestion();
  }

  public selectEmployee(email: string): void {
    if (this.selectedEmployeeEmail === email) {
      this.selectedEmployeeEmail = '';
    } else {
      this.selectedEmployeeEmail = email;
    }
  }

  public submit(): void {
    this.employeeService.recommend(this.selectedEmployeeEmail, this.question.key).subscribe(_ => {
        this.notificationService.create(
          'success',
          'Recommendation successfully send',
          `${this.employees.filter(it => it.mail === this.selectedEmployeeEmail)[0].name} has been recommended`
        );
      }
    );
  }

  public filter(event: any): void {
    if (event.target.value !== '') {
      this.filteredEmployees = this.employees.filter(employee => {
        const completeName = employee.name + ' ' + employee.surname;
        if (completeName.toLowerCase().includes(event.target.value.toLowerCase())) {
          return employee;
        }
      });
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  private initEmployees(): void {
    this.loading = true;
    this.employeeService.getAll().subscribe(employees => {
        this.employees = employees;
        this.filteredEmployees = this.employees;
        this.loading = false;
      }
    );
  }

  private initQuestion(): void {
    this.employeeService.getQuestion().subscribe(question => {
      if (question !== null) {
        this.question = question;
      }
    });
  }
}
