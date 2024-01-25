import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsService} from "../../../services/news.service";
import {HttpClientModule} from "@angular/common/http";
import {NewsComponent} from "./news.component";



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
