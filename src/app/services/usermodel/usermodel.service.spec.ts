import { TestBed } from '@angular/core/testing';

import { UsermodelService } from './usermodel.service';

describe('UsermodelService', () => {
  let service: UsermodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
