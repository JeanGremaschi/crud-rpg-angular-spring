import { Avatar } from './../enum/avatar.enum';
import { Player } from './player';
import { Component, Input, OnInit } from '@angular/core';
import { Role } from '../enum/role.enum';

@Component({
  selector: 'card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss'],
})
export class CardPlayerComponent implements OnInit {
  @Input()
  player: Player = {
    _id: '',
    name: '',
    avatar: Avatar.ADVENTURER,
    role: Role.SUPPORT,
    guild: '',
    description: '',
    age: 0,
    level: 0,
    points: 0,
    energy: 0,
    victories: 0,
    matches: 0,
    characters: [],
  };

  constructor() {}

  ngOnInit(): void {
    this.configDescription();
  }

  configDescription() {
    this.player.description =
      'A honorable member of the guild ' +
      this.player.guild +
      ', main ' +
      this.player.role +
      ' that has ' +
      this.player.age +
      ' years old and hold a total of ' +
      this.player.victories +
      ' victories in the bag. ' +
      'At level ' +
      this.player.level +
      ' has collected ' +
      this.player.characters.length +
      ' characters.';
  }
}
