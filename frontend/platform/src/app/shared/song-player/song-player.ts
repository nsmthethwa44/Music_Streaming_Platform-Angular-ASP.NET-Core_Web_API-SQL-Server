import {Component, ElementRef, OnInit, ViewChild, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/player-service/player-service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-song-player',
  imports: [CommonModule],
  templateUrl: './song-player.html',
  styleUrl: './song-player.scss',
})
export class SongPlayerComponent implements OnInit {
  @ViewChild('audio')
  audio!: ElementRef<HTMLAudioElement>;
  playerService = inject(PlayerService);

  ngOnInit(): void {
    this.playerService.currentSong$
      .subscribe(song => {
        if (!song) {
          return;
        }
        this.loadSong(song);
      });
  }

  private loadSong(song: any): void {
    const audio = this.audio.nativeElement;
    audio.src = this.getAudioUrl(song.audioUrl);
    audio.load();
    audio.play()
      .then(() => {
        this.playerService.setPlaying(true);
      })
      .catch(() => {
        this.playerService.setPlaying(false);
      });
  }

  togglePlay(): void {
    const audio = this.audio.nativeElement;
    if (audio.paused) {
      audio.play();
      this.playerService.setPlaying(true);
    } else {
      audio.pause();
      this.playerService.setPlaying(false);
    }
  }

  onTimeUpdate(): void {
    this.playerService.setCurrentTime(
      this.audio.nativeElement.currentTime
    );
  }

  onLoadedMetadata(): void {
    this.playerService.setDuration(
      this.audio.nativeElement.duration
    );
  }

  onEnded(): void {
    this.playerService.setPlaying(false);
    this.playerService.setCurrentTime(0);
  }

  seek(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.audio.nativeElement.currentTime =
      Number(input.value);
  }

  getAudioUrl(url: string): string {
    return `${environment.apiUrl}/${url}`;
  }

  formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) {
      return '0:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  }

    nextSong(): void {
    this.playerService.next();
  }

  previousSong(): void {
    this.playerService.previous();
  }
}