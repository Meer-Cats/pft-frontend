import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BannerComponent} from './banner.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [NgZorroAntdModule, CommonModule],
  declarations: [BannerComponent],
  exports: [
    BannerComponent
  ]
})

export class BannerModule { }
