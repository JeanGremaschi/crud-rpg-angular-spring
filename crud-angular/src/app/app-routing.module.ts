import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* Redireciona para um path especifico ao carregar o app-component */
  { path: '', pathMatch: 'full', redirectTo: /*'courses'*/ '' },
  {
    path: 'courses',
    loadChildren: () =>
      import('./card-player/card-player.module').then(
        (m) => m.CardPlayerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
