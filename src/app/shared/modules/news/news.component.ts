import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";
import {NewsInterface} from "../../interfaces/news.interface";
import {DateUtils} from "../../utils/date.utils";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.sass'
})
export class NewsComponent implements OnInit{
  allNews: NewsInterface[] = [];
  news: NewsInterface[] = [];
  startIndex: number = 0;
  chunkSize: number = 10;

  ngOnInit(): void {
    this.searchNews('Pokemon');
  }

  constructor(private newsService: NewsService) {}

  searchNews(query: string): void {
    this.newsService.getNews(query).subscribe({
      next: (data) => {
        this.news = data.articles;
        return this.toTraverseNews();
        // console.log(this.news);
      },
      error: (error) => {
        console.log('Erro ao buscar notícias', error);
      },
      complete: () => {
        console.log('Busca de notícias completa');
      }
    });
  }

  // To traverse News
  toTraverseNews() {
    this.allNews = this.allNews.concat(this.news.slice(this.startIndex, this.startIndex + this.chunkSize).map((n) => {
      return {
        title: n.title,
        description: n.description,
        url: n.url,
        urlToImage: n.urlToImage,
        publishedAt: DateUtils.date(n.publishedAt, 'dd MMM yyyy')
      }
    }));

    this.startIndex += this.chunkSize;
  }

  hasMoreNews(): boolean {
    return this.startIndex + this.chunkSize < this.news.length;
  }

}
