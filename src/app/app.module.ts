import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IconsProviderModule} from './icons-provider.module';
import {fr_FR, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import {LoginModule} from './pages/login/login.module';
import {HumanresourceModule} from './pages/humanresource/humanresource.module';
import {EmployeeModule} from './pages/employee/employee.module';
import {BannerModule} from './banner/banner.module';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    HumanresourceModule,
    EmployeeModule,
    BannerModule,
  ],
  providers: [{provide: NZ_I18N, useValue: fr_FR}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
