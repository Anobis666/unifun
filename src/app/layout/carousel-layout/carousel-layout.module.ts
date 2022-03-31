import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './component/carousel-layout.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselLayoutModule { }
