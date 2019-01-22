import { TestBed } from '@angular/core/testing';

import { ComponentsLibService } from './components-lib.service';

describe('ComponentsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentsLibService = TestBed.get(ComponentsLibService);
    expect(service).toBeTruthy();
  });
});
