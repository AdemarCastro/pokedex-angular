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
  @Input() companyName: string = '';

  buttonState: boolean = false;

  constructor() {}

  redirectToPage(page: string): void {
    window.open(page, '_blank');
  }

  clickButton(event: Event) {

    // Captura o elemento HTML no qual você clicou da série de elementos gerados pelo *ngFor
    const element = event.currentTarget as HTMLElement;

    // Se a classe 'liked' estiver presente, ela será removida; se não estiver, ela será adicionada
    element.classList.toggle("liked");

    // Não propaga o evento de clique para o elemento pai
    event.stopPropagation();
  }

}
