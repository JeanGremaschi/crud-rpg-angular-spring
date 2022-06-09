import { CardCharacterService } from './card-character.service';
import { Avatar } from '../enum/avatar.enum';
import { Character } from './character';
import { Component, OnInit, NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from '../enum/role.enum';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'card-character-list',
  templateUrl: './card-character-list.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private characterService: CardCharacterService,
    private snackBar: MatSnackBar
  ) {
    this.characterService
      .list()
      .pipe(
        catchError((error) => {
          this.snackBar.open(error.message, 'Ok');
          return of([]); /* esse retorno n ta funcionando direito */
        })
      )
      .subscribe((characters) => (this.characters = characters));
  }

  ngOnInit(): void {}

  onError(error: string){

  }
}
