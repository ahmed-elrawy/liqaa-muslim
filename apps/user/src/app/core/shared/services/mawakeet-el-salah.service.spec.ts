import { TestBed } from '@angular/core/testing';

import { MawakeetElSalahService } from './mawakeet-el-salah.service';

describe('MawakeetElSalahService', () => {
  let service: MawakeetElSalahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MawakeetElSalahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
