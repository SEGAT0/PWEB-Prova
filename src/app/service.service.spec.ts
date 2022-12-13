import { TestBed } from '@angular/core/testing';
import { AService } from './service';
import { ServiceLink } from './service.service';

describe('ServiceLink', () => {
  let service: ServiceLink;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLink);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});