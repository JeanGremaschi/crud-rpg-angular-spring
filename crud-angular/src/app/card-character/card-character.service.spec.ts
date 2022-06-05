import { TestBed } from '@angular/core/testing';

import { CardCharacterService } from './card-character.service';

describe('CardCharacterService', () => {
  let service: CardCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
