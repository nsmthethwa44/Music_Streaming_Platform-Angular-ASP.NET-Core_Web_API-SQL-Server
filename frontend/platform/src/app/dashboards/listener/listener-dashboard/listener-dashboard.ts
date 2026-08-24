import { Component } from '@angular/core';
import { Sidebar } from '../../../shared/sidebar/sidebar';
import { Header } from '../../../shared/header/header';
import { RouterOutlet } from '@angular/router';
import { SongPlayerComponent } from '../../../shared/song-player/song-player';
import { Copyright } from "../../../shared/copyright/copyright";

@Component({
  selector: 'app-listener-dashboard',
  imports: [Sidebar, Header, RouterOutlet, SongPlayerComponent, Copyright],
  templateUrl: './listener-dashboard.html',
  styleUrl: './listener-dashboard.scss',
})
export class ListenerDashboard {

}
