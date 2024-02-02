import { TestBed } from '@angular/core/testing';

import { PlayersStoreService } from './players-store.service';

describe('PlayersStoreService', () => {
  let service: PlayersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
