import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from "./home/home.module";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppModule {

}
