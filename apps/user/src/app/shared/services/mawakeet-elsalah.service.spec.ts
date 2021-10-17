import { TestBed } from '@angular/core/testing';

import { MawakeetElsalahService } from './mawakeet-elsalah.service';

describe('MawakeetElsalahService', () => {
  let service: MawakeetElsalahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MawakeetElsalahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
