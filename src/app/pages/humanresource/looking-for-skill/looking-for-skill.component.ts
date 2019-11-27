import {Component, OnInit} from '@angular/core';
import {BannerService} from '../../../services/banner.service';
import {Employee} from '../../../models/employee';
import {EmployeeApiService} from '../../../services/employee-api.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-looking-for-skill',
  templateUrl: './looking-for-skill.component.html',
  styleUrls: ['./looking-for-skill.component.scss']
})
export class LookingForSkillComponent implements OnInit {
  public isVisible = false;
  public isOkLoading = false;

  public skillsList: string[] = [];
  public selectedSkills: string[] = [];

  public employees: Employee[] = [];
  public selectedEmployees: Employee[] = [];

  public loading = false;

  constructor(
    private sanitizer: DomSanitizer,
    private bannerService: BannerService,
    private employeeService: EmployeeApiService) {
    bannerService.show$.next(true);
    this.employeeService.getAll().subscribe(employees => this.employees = employees);
  }

  ngOnInit() {
    this.initSkillsList();
  }

  public update() {
    this.employeeService.search(this.selectedSkills).subscribe(employees => this.employees = employees);
  }

  public getAvatar(item): Observable<SafeUrl> {
    return item.avatar ? of(this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64, ' + item.avatar))
      : of('https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png');
  }

  private initSkillsList(): void {
    this.loading = true;
    this.skillsList.push('Java');
    this.skillsList.push('JS');
    this.skillsList.push('Python');
    this.skillsList.push('Scrum');
    this.skillsList.push('Management');
    this.loading = false;
  }

  public selectEmployee(employee: Employee) {
    if (!this.selectedEmployees.includes(employee)) {
      this.selectedEmployees.push(employee);
    } else {
      const index = this.selectedEmployees.findIndex(e => e === employee);
      if (index > -1) {
        this.selectedEmployees.splice(index, 1);
      }
    }
  }

  public showModal(): void {
    this.isVisible = true;
  }

  public handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  public handleCancel(): void {
    this.isVisible = false;
  }
}
