import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsHome } from './popups-home';

describe('PopupsHome', () => {
  let component: PopupsHome;
  let fixture: ComponentFixture<PopupsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupsHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupsHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
