import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardform } from './cardform';

describe('Cardform', () => {
  let component: Cardform;
  let fixture: ComponentFixture<Cardform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
