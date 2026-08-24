import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { environment } from '../../../environments/environment';
import { Song } from '../../models/Song.model';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private baseUrl = `${environment.apiUrl}/api/song`;
  constructor(private http: HttpClient) {}

  // Get all songs
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}`);
  } 

  // Upload new song
  uploadSong(title: string, albumTitle: string, genre: string, audioFile: File, coverImage: File | null): Observable<Song> {
    const formData = new FormData();
    formData.append('Title', title);
    formData.append('AlbumTitle', albumTitle);
    formData.append('Genre', genre);
    formData.append('AudioFile', audioFile);
    if (coverImage) {formData.append('CoverImage', coverImage);}

    return this.http.post<Song>(`${this.baseUrl}/upload`, formData);
  }

  // Get songs uploaded by logged-in artist
  getArtistSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/my-songs`);
  }
}
