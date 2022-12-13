import { TestBed } from '@angular/core/testing';
import { AService } from './todo';
import { TodoLink } from './todo.service';

describe('ServiceLink', () => {
  let service: TodoLink;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoLink);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});