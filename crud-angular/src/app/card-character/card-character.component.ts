import { Character } from './character';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterComponent implements OnInit {
  @Input()
  character: Character = {
    _id: '1',
    name: 'Nome',
    class: 'Classe',
    attributes: {
      hp: 100,
      mp: 100,
      charisma: 0,
      dexterity: 0,
      intelligence: 0,
      lucky: 0,
      strength: 0,
      wisdom: 0,
      resistence: 0,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
