import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerBrowser } from './listener-browser';

describe('ListenerBrowser', () => {
  let component: ListenerBrowser;
  let fixture: ComponentFixture<ListenerBrowser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListenerBrowser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenerBrowser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
