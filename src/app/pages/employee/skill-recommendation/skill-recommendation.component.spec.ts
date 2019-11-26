import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRecommendationComponent } from './skill-recommendation.component';

describe('SkillRecommendationComponent', () => {
  let component: SkillRecommendationComponent;
  let fixture: ComponentFixture<SkillRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
