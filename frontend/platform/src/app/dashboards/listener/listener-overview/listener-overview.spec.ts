import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerOverview } from './listener-overview';

describe('ListenerOverview', () => {
  let component: ListenerOverview;
  let fixture: ComponentFixture<ListenerOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListenerOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenerOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
