import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HumanresourceComponent} from './humanresource.component';

const routes: Routes = [
  { path: '', component: HumanresourceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HumanresourceRoutingModule { }
