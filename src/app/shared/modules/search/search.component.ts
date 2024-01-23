import { Component } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})
export class SearchComponent {

  protected readonly faSearch = faSearch;
}
