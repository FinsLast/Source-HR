import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },  
  { path: 'index2', loadChildren: () => import('./index2/index2.module').then(m => m.Index2Module) }, 
  { path: 'index3', loadChildren: () => import('./index3/index3.module').then(m => m.Index3Module) },
  { path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  {path: "**", redirectTo: "/index" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: false,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
