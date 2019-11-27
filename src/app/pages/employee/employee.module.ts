import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SkillRecommendationComponent} from './skill-recommendation/skill-recommendation.component';
import {EmployeeComponent} from './employee.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [NgZorroAntdModule, CommonModule],
  declarations: [SkillRecommendationComponent, EmployeeComponent],
  exports: [
    SkillRecommendationComponent,
    EmployeeComponent
  ]
})

export class EmployeeModule {
}
