import { Component } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  left = 'justify-start';
  right = 'justify-end';

  protected readonly faSearch = faSearch;
}
