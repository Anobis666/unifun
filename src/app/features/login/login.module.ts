import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatInputModule
  ]
})
export class LoginModule { }
