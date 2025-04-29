import { TestBed } from '@angular/core/testing';

import { ServiceFlavorshareService } from './service-flavorshare.service';

describe('ServiceFlavorshareService', () => {
  let service: ServiceFlavorshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFlavorshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
