import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesHome } from './tables-home';

describe('TablesHome', () => {
  let component: TablesHome;
  let fixture: ComponentFixture<TablesHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
