import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.sass'
})
export class CardMenuComponent {
  @Input() justify: string = '';
  @Input() text: string = '';
  @Input() color: string = '';
}
