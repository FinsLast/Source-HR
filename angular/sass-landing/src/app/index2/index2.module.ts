import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Index2RoutingModule } from './index2-routing.module';
import { Index2Component } from './index2.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    Index2Component
  ],
  imports: [
    CommonModule,
    Index2RoutingModule,
    CarouselModule
  ]
})
export class Index2Module { }
