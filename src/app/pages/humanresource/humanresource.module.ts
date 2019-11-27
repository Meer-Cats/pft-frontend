import {NgModule} from '@angular/core';
import {NgZorroAntdModule, NzSelectModule} from 'ng-zorro-antd';
import {LookingForSkillComponent} from './looking-for-skill/looking-for-skill.component';
import {HumanresourceComponent} from './humanresource.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [NgZorroAntdModule, FormsModule, NzSelectModule, CommonModule],
  declarations: [LookingForSkillComponent,
    HumanresourceComponent],
  exports: [HumanresourceComponent]
})

export class HumanresourceModule { }
