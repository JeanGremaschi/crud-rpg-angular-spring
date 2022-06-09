import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackComponent } from './components/error-snack/error-snack.component';



@NgModule({
  declarations: [
    ErrorSnackComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorSnackComponent
  ]
})
export class SharedModule { }
