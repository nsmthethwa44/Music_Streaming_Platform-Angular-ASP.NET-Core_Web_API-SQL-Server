import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerDashboard } from './listener-dashboard';

describe('ListenerDashboard', () => {
  let component: ListenerDashboard;
  let fixture: ComponentFixture<ListenerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListenerDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenerDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
