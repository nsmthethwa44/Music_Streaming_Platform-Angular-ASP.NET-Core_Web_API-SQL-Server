import { Component } from '@angular/core';
import { ArtistUploadSong } from "../artist-upload-song/artist-upload-song";
import { Song } from '../../../models/Song.model';
import { SongService } from '../../../services/song-service/song-service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-artist-overview',
  imports: [ArtistUploadSong, CommonModule],
  templateUrl: './artist-overview.html',
  styleUrl: './artist-overview.scss',
})
export class ArtistOverview {
isVisible = false;
songs: Song[] = [];
constructor( private songSvc: SongService) {}

openUploadSong(){
  this.isVisible = !this.isVisible;
}

ngOnInit(): void {
  this.loadSongs();
}

// load artist songs
loadSongs(): void {
  this.songSvc.getArtistSongs().subscribe({
      next: (songs) => {
        this.songs = songs;
      },
      error: (error) => {
        console.error('Could not load artist songs:', error);
      }
    });
}

formatDuration(duration: string): string {
  if (!duration) {
    return '0:00';
  }

  const parts = duration.split(':');
  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);
  const seconds = Number(parts[2]);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

getImageUrl(path: string) {
  return `${environment.apiUrl}/${path}` || "assets/img/user.jpg"
}


}
