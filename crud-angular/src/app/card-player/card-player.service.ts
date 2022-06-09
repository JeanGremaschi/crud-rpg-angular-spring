import { Player } from './player';
import { Injectable } from '@angular/core';
import { Avatar } from '../enum/avatar.enum';
import { Role } from '../enum/role.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardPlayerService {
  private readonly API = 'http://localhost:8080/api/players';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.API).pipe(
      first(),
      tap((player) => console.log(player))
    );
  }

  listTest() {
    return [
      {
        _id: '1',
        name: 'Nome',
        avatar: Avatar.ASSASSIN,
        role: Role.DPS,
        guild: 'Team',
        age: 29,
        description: '',
        level: 10,
        points: 2456,
        energy: 6,
        victories: 1,
        matches: 3,
        characters: [],
      },
      {
        _id: '2',
        name: 'Nome2',
        avatar: Avatar.DRAGON,
        role: Role.TANK,
        guild: 'Team',
        age: 23,
        description: '',
        level: 34,
        points: 8690,
        energy: 2,
        victories: 34,
        matches: 57,
        characters: [],
      },
      {
        _id: '3',
        name: 'Nome3',
        avatar: Avatar.MAGICIAN,
        role: Role.SUPPORT,
        guild: 'Team',
        age: 21,
        description: '',
        level: 17,
        points: 4642,
        energy: 5,
        victories: 13,
        matches: 25,
        characters: [],
      },
    ];
  }
}
