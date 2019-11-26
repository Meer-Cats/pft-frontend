import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [NgZorroAntdModule],
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ]
})

export class HumanresourceModule { }
