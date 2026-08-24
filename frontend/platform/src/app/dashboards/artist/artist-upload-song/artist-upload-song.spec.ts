import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistUploadSong } from './artist-upload-song';

describe('ArtistUploadSong', () => {
  let component: ArtistUploadSong;
  let fixture: ComponentFixture<ArtistUploadSong>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistUploadSong]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistUploadSong);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
