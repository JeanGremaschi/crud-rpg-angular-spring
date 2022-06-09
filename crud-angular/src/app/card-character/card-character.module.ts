import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCharacterRoutingModule } from './card-character-routing.module';
import { CardCharacterComponent } from './card-character.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CardCharacterListComponent } from './card-character-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CardCharacterComponent, CardCharacterListComponent],
  imports: [
    CommonModule,
    CardCharacterRoutingModule,
    AppMaterialModule,
    FormsModule,
    SharedModule
  ],
  exports: [CardCharacterComponent, CardCharacterListComponent],
})
export class CardCharacterModule {}
