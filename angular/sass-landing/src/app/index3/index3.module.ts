import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Index3RoutingModule } from './index3-routing.module';
import { Index3Component } from './index3.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    Index3Component
  ],
  imports: [
    CommonModule,
    Index3RoutingModule,
    CarouselModule
  ]
})
export class Index3Module { }
