import { CardPlayerService } from './card-player.service';
import { Avatar } from '../enum/avatar.enum';
import { Player } from './player';
import { Component, OnInit, NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from '../enum/role.enum';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'card-player-list',
  templateUrl: './card-player-list.component.html',
  styleUrls: ['./card-player.component.scss'],
})
export class CardPlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private playerService: CardPlayerService,
    private snackBar: MatSnackBar
  ) {
    this.playerService
      .list()
      .pipe(
        catchError((error) => {
          this.snackBar.open(error.message, 'Ok');
          return of([]); /* esse retorno n ta funcionando direito */
        })
      )
      .subscribe((players) => (this.players = players));
  }

  ngOnInit(): void {}
}
