import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index3Component } from './index3.component';

const routes: Routes = [{ path: '', component: Index3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Index3RoutingModule { }
