import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { SearchBarComponent } from "./component/search-bar.component";





@NgModule({
    declarations: [
      SearchBarComponent
    ],
    imports: [
      CommonModule,
      MaterialModule,
    ],
  exports: [
    SearchBarComponent
  ]
  })
  export class SearchBarModule { }