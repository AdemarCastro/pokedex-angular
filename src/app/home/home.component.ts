import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  left = 'justify-start';
  right = 'justify-end';

  news = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.searchNews('Pokemon');
  }

  searchNews(query: string): void {
    this.newsService.getNews(query).subscribe({
      next: (data) => {
        this.news = data.articles;
        console.log(this.news);
      },
      error: (error) => {
        console.log('Erro ao buscar notícias', error);
      },
      complete: () => {
        console.log('Busca de notícias completa');
      }
    });
  }

  protected readonly faSearch = faSearch;
}
