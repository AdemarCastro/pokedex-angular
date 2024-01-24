import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {SearchComponent} from "./search.component";

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    FaIconComponent
  ]
})
export class SearchModule { }
