/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NationService } from './nation.service';

describe('Service: Nation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NationService]
    });
  });

  it('should ...', inject([NationService], (service: NationService) => {
    expect(service).toBeTruthy();
  }));
});
