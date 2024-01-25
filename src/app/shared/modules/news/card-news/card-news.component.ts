import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrl: './card-news.component.sass'
})
export class CardNewsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() url: string = '';
  @Input() urlToImage: string = '';
  @Input() publishedAt: string = '';

}
