import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  left = 'justify-start';
  right = 'justify-end';

  constructor() {}

  ngOnInit(): void {
  }

  protected readonly faSearch = faSearch;
}
