import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";
import {query} from "@angular/animations";
import * as console from "console";
import * as console from "console";
import {error} from "@angular/compiler-cli/src/transformers/util";
import * as console from "console";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.sass'
})
export class NewsComponent implements OnInit{
  news = [];

  ngOnInit(): void {

  }

  constructor(private newsService: NewsService) {}

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

}
