import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class CardCharacterService {
  private readonly API = '/assets/tempc.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.API).pipe(
      first(),
      tap((character) => console.log(character))
    );
  }
}
