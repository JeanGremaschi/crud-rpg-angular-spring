import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCharacterRoutingModule } from './card-character-routing.module';
import { CardCharacterComponent } from './card-character.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    CardCharacterComponent
  ],
  imports: [
    CommonModule,
    CardCharacterRoutingModule,
    AppMaterialModule
  ],
  exports: [
    CardCharacterComponent
  ]
})
export class CardCharacterModule { }
