import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DateMonthAgoUtils} from "../shared/utils/dateMonthAgo.utils";
import {DateUtils} from "../shared/utils/date.utils";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = '/api/v2/everything';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  // Método CRUD que retorna o objeto JSON da News API
  getNews(query: string): Observable<any> {
    // A Utils abaixo serve para buscar a data de 30 dias corridos atrás, pois a NewsAPI na forma gratuíta não permite buscar notícias antes disso
    const from = DateUtils.getNumericDate((DateMonthAgoUtils.getDateMonthAgo()).toString());
    // console.log(from);
    const sortBy = 'publishedAt';

    const url = `${this.apiUrl}?q=${query}&from=${from}&sortBy=${sortBy}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
