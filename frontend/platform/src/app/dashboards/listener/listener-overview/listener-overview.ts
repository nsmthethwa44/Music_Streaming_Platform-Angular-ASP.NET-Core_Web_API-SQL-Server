import { Component, OnInit, inject} from '@angular/core';
import { Song } from '../../../models/Song.model';
import { environment } from '../../../../environments/environment';
import { SongService } from '../../../services/song-service/song-service';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../../services/player-service/player-service';
import { UserService } from '../../../services/user-service/user-service';
import { User } from '../../../models/User-model';
import { Playlist } from "../../../components/playlist/playlist";
import { Preloader } from '../../../components/preloader/preloader';

@Component({
  selector: 'app-listener-overview',
  imports: [CommonModule, Playlist, Preloader],
  templateUrl: './listener-overview.html',
  styleUrl: './listener-overview.scss',
})
export class ListenerOverview implements OnInit{
songs: Song[] = [];
users: User[] = [];
constructor(private songSvc: SongService, private userSvc: UserService){}
 playerService = inject(PlayerService);

  playSong(song: Song): void {
    this.playerService.selectSong(song);
  }

getImageUrl(path: string) {
  return `${environment.apiUrl}/${path}` || "assets/img/user.jpg"
}

ngOnInit(): void {
  this.getSongs();  
   this.getArtists();
}

// get songs from db
getSongs(){
  this.songSvc.getSongs().subscribe({
    next: (res) =>{
      this.songs = res;
      this.playerService.setQueue(res);
    },
    error: (err) => {console.log(err)}
  })
}

// get users or artists
getArtists(){
  this.userSvc.getUsers().subscribe({
    next: (res) =>{
      this.users = res;
      console.log(res)
    },
    error: (err) => {console.log(err)}
  })
}

}
