import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { FormsModule } from '@angular/forms';
import { CarouselLayoutModule } from './carousel-layout/carousel-layout.module';
import { LoginModule } from '../features/login/login.module';





@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    FormsModule,
    CarouselLayoutModule,
    LoginModule
  ],
  exports: [
    NavbarModule,
    FooterModule,
    FormsModule,
    CarouselLayoutModule,
    LoginModule
  ]
})
export class LayoutModule { }
