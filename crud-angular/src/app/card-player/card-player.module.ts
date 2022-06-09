import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerRoutingModule } from './card-player-routing.module';
import { CardPlayerComponent } from './card-player.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CardPlayerListComponent } from './card-player-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardPlayerComponent, CardPlayerListComponent],
  imports: [
    CommonModule,
    CardPlayerRoutingModule,
    AppMaterialModule,
    FormsModule,
    SharedModule
  ],
  exports: [CardPlayerComponent, CardPlayerListComponent],
})
export class CardPlayerModule {}
