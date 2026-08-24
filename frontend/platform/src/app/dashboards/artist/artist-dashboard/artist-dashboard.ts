import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../../shared/sidebar/sidebar';
import { Header } from '../../../shared/header/header';
import { Copyright } from '../../../shared/copyright/copyright';

@Component({
  selector: 'app-artist-dashboard',
  imports: [RouterOutlet, Sidebar, Header, Copyright],
  templateUrl: './artist-dashboard.html',
  styleUrl: './artist-dashboard.scss',
})
export class ArtistDashboard {

}
