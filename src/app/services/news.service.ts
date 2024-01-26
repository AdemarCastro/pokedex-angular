import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = '/api/v2/everything';
  // private apiUrl = '/api/v2/everything';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  // Método CRUD que retorna o objeto JSON da News API
  getNews(query: string): Observable<any> {
    const from = '2023-12-26';
    const sortBy = 'publishedAt';

    const url = `${this.apiUrl}?q=${query}&from=${from}&sortBy=${sortBy}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
