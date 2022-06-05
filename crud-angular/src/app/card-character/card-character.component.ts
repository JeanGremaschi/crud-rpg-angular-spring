import { Character } from './character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  characters: Character[] = [{ _id: '1', name: 'Nome', category: 'Categoria' }];
  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
