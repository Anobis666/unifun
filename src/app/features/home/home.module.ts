import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { NavbarModule } from 'src/app/layout/navbar/navbar.module';
import { FooterModule } from 'src/app/layout/footer/footer.module';
import { CarouselLayoutModule } from 'src/app/layout/carousel-layout/carousel-layout.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    CarouselLayoutModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
