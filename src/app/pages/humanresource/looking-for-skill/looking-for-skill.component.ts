import {Component, OnInit} from '@angular/core';
import {BannerService} from '../../../services/banner.service';
import {Employee} from '../../../models/employee';
import {EmployeeApiService} from '../../../services/employee-api.service';

@Component({
  selector: 'app-looking-for-skill',
  templateUrl: './looking-for-skill.component.html',
  styleUrls: ['./looking-for-skill.component.scss']
})
export class LookingForSkillComponent implements OnInit {

  public skillsList: { id: string, name: string }[] = [];
  public selectedSkill: { id: string, name: string };

  public loading = false;

  public data: Employee[] = [];

  constructor(private bannerService: BannerService, private employeeService: EmployeeApiService) {
    bannerService.show$.next(true);
  }

  ngOnInit() {
    this.initSkillsList();

    this.employeeService.getAll().subscribe(employees => this.data = employees);
  }

  public update() {
    this.employeeService.search(this.selectedSkill.name).subscribe(employees => this.data = employees);
  }

  private initSkillsList(): void {
    this.loading = true;
    this.skillsList.push({ id: '1', name: 'Java' });
    this.skillsList.push({ id: '2', name: 'JS' });
    this.skillsList.push({ id: '3', name: 'Python' });
    this.skillsList.push({ id: '4', name: 'Scrum' });
    this.skillsList.push({ id: '5', name: 'Management' });
    this.loading = false;
  }



}
