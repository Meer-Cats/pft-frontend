import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-looking-for-skill',
  templateUrl: './looking-for-skill.component.html',
  styleUrls: ['./looking-for-skill.component.scss']
})
export class LookingForSkillComponent implements OnInit {

  public skillsList: Array<{ id: string, name: string }> = [];
  public selectedSkills: Array<{ id: string, name: string }> = [];

  public loading = false ;

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

  constructor() { }

  ngOnInit() {
    this.initSkillsList();
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
