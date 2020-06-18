import { TestBed } from '@angular/core/testing';

import { MyLibTwoService } from './my-lib-two.service';

describe('MyLibTwoService', () => {
  let service: MyLibTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
