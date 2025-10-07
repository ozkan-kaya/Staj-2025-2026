import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsHome } from './lists-home';

describe('ListsHome', () => {
  let component: ListsHome;
  let fixture: ComponentFixture<ListsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
