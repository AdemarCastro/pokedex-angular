import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";
import {NewsInterface} from "../../interfaces/news.interface";
import {DateHoursAndDaysUtils} from "../../utils/dateHoursAndDays.utils";

interface Navigator {
  vibrate?(pattern: number | number[]): boolean;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.sass'
})
export class NewsComponent implements OnInit, AfterViewInit{
  allNews: NewsInterface[] = [];
  news: NewsInterface[] = [];
  loading: boolean = false;
  startIndex: number = 0;
  chunkSize: number = 10;

  botaoHabilitado: boolean = true;


  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.searchNews('Pokemon');
  }
  // Exibir o componente apenas quando for totalmente carregado

  ngAfterViewInit() : void {
    this.cdr.detectChanges();
  }

  searchNews(query: string): void {
    this.loading = true;

    this.newsService.getNews(query).subscribe({
      next: (data) => {
        this.news = data.articles;
        console.log(this.news);
        return this.toTraverseNews();
      },
      error: (error) => {
        console.log('Erro ao buscar notícias', error);
      },
      complete: () => {
        console.log('Busca de notícias completa');
        this.loading = false;
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
        publishedAt: DateHoursAndDaysUtils.getDateHoursAndDays((n.publishedAt).toString()),
        source: {
          id: n.source.id,
          name: n.source.name,
        }
      }
    }));

    this.startIndex += this.chunkSize;
  }

  vibrate() {
    // Condição que vibra o dispositivo ao clicar no botão, apenas para dispositivos que possuem tal função
    // Pattern captura a quantidade de milissegundos em que o dispositivo irá vibrar
    // Também é possível passar um parâmetro em forma de array como [200, 100, 200] para que o dispositivo vibre por 200ms, pause por 100ms e vibre novamente por 200ms
    if ('vibrate' in navigator) {
      navigator.vibrate(65);
    }
  }

  hasMoreNews(): boolean {
    return this.startIndex + this.chunkSize < this.news.length;
  }

  bloquearBotao() {
    // Desabilita o botão
    this.botaoHabilitado = false;

    // Tempo em milissegundos que o botão ficará desabilitado (por exemplo, 5 segundos)
    const intervaloBloqueio = 700;

    // Aguarda o intervalo de tempo e, em seguida, reabilita o botão
    setTimeout(() => {
      this.botaoHabilitado = true;
    }, intervaloBloqueio);
  }

  tocarMusica() {
    // Obtém o elemento de áudio
    const audio = document.getElementById('musica') as HTMLAudioElement;

    // Toca a música
    audio.play();
  }

}
