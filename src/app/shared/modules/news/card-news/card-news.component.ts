import {Component, Input} from '@angular/core';

interface Navigator {
  vibrate?(pattern: number | number[]): boolean;
}

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

  vibrate() {
    // Condição que vibra o dispositivo ao clicar no botão, apenas para dispositivos que possuem tal função
    // Pattern captura a quantidade de milissegundos em que o dispositivo irá vibrar
    // Também é possível passar um parâmetro em forma de array como [200, 100, 200] para que o dispositivo vibre por 200ms, pause por 100ms e vibre novamente por 200ms
    if ('vibrate' in navigator) {
      navigator.vibrate(55);
    }
  }

}
