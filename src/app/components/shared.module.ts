import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { CardLabelComponent } from './card/card-label/card-label.component';
import { CardPricingComponent } from './card/card-pricing/card-pricing.component';



@NgModule({
  declarations: [
    CardComponent,
    MenuComponent,
    CardLabelComponent,
    CardPricingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    MenuComponent
  ]
})
export class SharedModule { }
