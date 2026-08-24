import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDashboard } from './artist-dashboard';

describe('ArtistDashboard', () => {
  let component: ArtistDashboard;
  let fixture: ComponentFixture<ArtistDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
