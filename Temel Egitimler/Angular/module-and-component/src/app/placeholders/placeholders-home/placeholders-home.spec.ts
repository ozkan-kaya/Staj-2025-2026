import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholdersHome } from './placeholders-home';

describe('PlaceholdersHome', () => {
  let component: PlaceholdersHome;
  let fixture: ComponentFixture<PlaceholdersHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholdersHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholdersHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
