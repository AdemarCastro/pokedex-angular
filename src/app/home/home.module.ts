import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {SearchComponent} from "../shared/modules/search/search.component";
import {CardMenuComponent} from "../shared/modules/card-menu/card-menu.component";



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    FaIconComponent
  ]
})
export class HomeModule { }
