import { TestBed } from '@angular/core/testing';

import { ServicioDatosPorfolioService } from './servicio-datos-porfolio.service';

describe('ServicioDatosPorfolioService', () => {
  let service: ServicioDatosPorfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDatosPorfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
