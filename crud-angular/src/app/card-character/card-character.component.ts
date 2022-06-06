import { Character } from './character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterComponent implements OnInit {
  characters: Character[] = [
    {
      _id: '1',
      name: 'Nome',
      class: 'Classe',
      attributes: {
        lifepoints: 100,
        manapoints: 100,
        charisma: 0,
        dexterity: 0,
        intelligence: 0,
        lucky: 0,
        strength: 0,
        wisdom: 0,
        resistence: 0,
      },
    },
    {
      _id: '2',
      name: 'Nome2',
      class: 'Classe',
      attributes: {
        lifepoints: 100,
        manapoints: 100,
        charisma: 0,
        dexterity: 0,
        intelligence: 0,
        lucky: 0,
        strength: 0,
        wisdom: 0,
        resistence: 0,
      },
    },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
