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

    // Verifica se a classe buttonHearth está presente
    const isMax : boolean = element.classList.contains('buttonHearthMax');

    element.classList.remove('buttonHearthMax');
    element.classList.remove('buttonHearthMin');

    // Remove a classe correspondente
    if (isMax) {

      element.classList.add('buttonHearthMin');
    } else {

      element.classList.add('buttonHearthMax');
    }

    // Não propaga o evento de clique para o elemento pai
    event.stopImmediatePropagation();
  }

}
