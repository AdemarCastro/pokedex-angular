import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardMenuComponent} from "./card-menu.component";



@NgModule({
  declarations: [CardMenuComponent],
  exports: [CardMenuComponent],
  imports: [
    CommonModule
  ]
})
export class CardMenuModule { }
