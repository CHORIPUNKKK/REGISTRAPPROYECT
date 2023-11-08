import { TestBed } from '@angular/core/testing';

import { ServJSONService } from './serv-json.service';

describe('ServJSONService', () => {
  let service: ServJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
