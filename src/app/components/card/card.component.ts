import { Component, Input } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input()
  gameCover:string = ''
  @Input()
  gameType:string = ''
  @Input()
  gameLabel:string = ''
  @Input()
  gamePrice:string = ''

}
