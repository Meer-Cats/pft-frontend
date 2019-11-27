import {Component, OnInit} from '@angular/core';
import {BannerService} from '../../../services/banner.service';
import {Employee} from '../../../models/employee';
import {EmployeeApiService} from '../../../services/employee-api.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Observable, of} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-looking-for-skill',
  templateUrl: './looking-for-skill.component.html',
  styleUrls: ['./looking-for-skill.component.scss']
})
export class LookingForSkillComponent implements OnInit {
  public isVisible = false;

  public skillsList: string[] = [];
  public selectedSkills: string[] = [];

  public employees: Employee[] = [];
  public selectedEmployees: Employee[] = [];

  public loading = false;

  validateForm: FormGroup;

  constructor(
    private sanitizer: DomSanitizer,
    private bannerService: BannerService,
    private formBuilder: FormBuilder,
    private notificationService: NzNotificationService,
    private employeeService: EmployeeApiService) {
    bannerService.show$.next(true);
  }

  ngOnInit() {
    this.initSkillsList();
    this.initEmployees();

    this.validateForm = this.formBuilder.group({
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
      inviteDate: [null, [Validators.required]]
    });
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

  private initEmployees(): void {
    this.employeeService.getAll().subscribe(employees => this.employees = employees);
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

  public showDrawer(): void {
    this.isVisible = true;
  }

  public closeDrawer(): void {
    this.isVisible = false;
  }

  public onOk(result: Date): void {}

  public submitInvitation(): void {
    for (const i in this.validateForm.controls) {
      if (i != null) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    const mails: string[] = this.selectedEmployees.map(e => e.mail);
    const subject: string = this.validateForm.controls.subject.value;
    const message: string = this.validateForm.controls.message.value;
    const inviteDate: Date = this.validateForm.controls.inviteDate.value;

    const employeesName: string[] = this.selectedEmployees.map(e => `${e.name} ${e.surname}`);

    this.employeeService.invite(mails, subject, message, inviteDate)
      .subscribe(() => {
          this.closeDrawer();
          this.notificationService.create(
            'success',
            'Mail successfuly send',
            `${employeesName.join(', ')} were notified of your invitation`
          );
        }
      );
  }
}
