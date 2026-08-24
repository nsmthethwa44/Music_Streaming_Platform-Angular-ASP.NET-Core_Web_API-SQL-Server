import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from '../../models/Song.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private songs: Song[] = [];
  private currentSongSubject = new BehaviorSubject<Song | null>(null);
  currentSong$ = this.currentSongSubject.asObservable();
  private isPlayingSubject = new BehaviorSubject<boolean>(false);
  isPlaying$ = this.isPlayingSubject.asObservable();
  private currentTimeSubject = new BehaviorSubject<number>(0);
  currentTime$ = this.currentTimeSubject.asObservable();
  private durationSubject = new BehaviorSubject<number>(0);
  duration$ = this.durationSubject.asObservable();

  setQueue(songs: Song[]): void {
    this.songs = songs;
  }

  selectSong(song: Song): void {
    const currentSong = this.currentSongSubject.value;
    if (currentSong?.id === song.id) {
      this.togglePlay();
      return;
    }
    this.currentSongSubject.next(song);
    this.currentTimeSubject.next(0);
    this.isPlayingSubject.next(true);
  }

  // play next 
  next(): void {
    if (!this.songs.length)  return;
    const currentSong = this.currentSongSubject.value;
    if (!currentSong) return;
    const currentIndex = this.songs.findIndex(song => song.id === currentSong.id );
    if (currentIndex === -1) return;
    const nextIndex = currentIndex + 1;
    if (nextIndex >= this.songs.length)
      return;
    this.currentSongSubject.next(
      this.songs[nextIndex]
    );
    this.currentTimeSubject.next(0);
    this.isPlayingSubject.next(true);
  }

  // play previous song 
  previous(): void {
    if (!this.songs.length) return;
    const currentSong = this.currentSongSubject.value;
    if (!currentSong) return;
    const currentIndex = this.songs.findIndex(song => song.id === currentSong.id);
    if (currentIndex === -1) return;
    const previousIndex = currentIndex - 1;
    if (previousIndex < 0) return;
    this.currentSongSubject.next(this.songs[previousIndex]);
    this.currentTimeSubject.next(0);
    this.isPlayingSubject.next(true);
  }

  // toggle play button
  togglePlay(): void {
    this.isPlayingSubject.next(
      !this.isPlayingSubject.value
    );
  }

  setPlaying(value: boolean): void {
    this.isPlayingSubject.next(value);
  }

  setCurrentTime(value: number): void {
    this.currentTimeSubject.next(value);
  }

  setDuration(value: number): void {
    this.durationSubject.next(value);
  }

  getCurrentSong(): Song | null {
    return this.currentSongSubject.value;
  }

  getIsPlaying(): boolean {
    return this.isPlayingSubject.value;
  }
}