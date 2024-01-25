import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NewsService} from "../../../services/news.service";
import {HttpClientModule} from "@angular/common/http";
import {NewsComponent} from "./news.component";
import {CardNewsComponent} from "./card-news/card-news.component";



@NgModule({
  declarations: [
    NewsComponent,
    CardNewsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  exports: [
    NewsComponent
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
