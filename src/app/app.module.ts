import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from "./home/home.module";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    HomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppModule {

}
