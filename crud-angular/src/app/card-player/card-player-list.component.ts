import { CardPlayerService } from './card-player.service';
import { Avatar } from '../enum/avatar.enum';
import { Player } from './player';
import { Component, OnInit } from '@angular/core';
import { Role } from '../enum/role.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-player-list',
  templateUrl: './card-player-list.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerListComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: CardPlayerService) {
    this.playerService.list().subscribe(players => this.players = players)
  }

  ngOnInit(): void {
  }

}
