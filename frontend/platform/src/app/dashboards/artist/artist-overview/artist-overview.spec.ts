import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistOverview } from './artist-overview';

describe('ArtistOverview', () => {
  let component: ArtistOverview;
  let fixture: ComponentFixture<ArtistOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
