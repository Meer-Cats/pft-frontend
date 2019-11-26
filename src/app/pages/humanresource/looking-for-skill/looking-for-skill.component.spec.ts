import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingForSkillComponent } from './looking-for-skill.component';

describe('LookingForSkillComponent', () => {
  let component: LookingForSkillComponent;
  let fixture: ComponentFixture<LookingForSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookingForSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookingForSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
