import { Routes } from '@angular/router';
import { ArtistDashboard } from './dashboards/artist/artist-dashboard/artist-dashboard';
import { ArtistOverview } from './dashboards/artist/artist-overview/artist-overview';
import { ListenerDashboard } from './dashboards/listener/listener-dashboard/listener-dashboard';    
import { ListenerOverview } from './dashboards/listener/listener-overview/listener-overview';   
import { AuthGuard } from './auth/guards/auth-guard';
import { ListenerBrowser } from './dashboards/listener/listener-browser/listener-browser';

export const routes: Routes = [
        {path: "", component: ListenerDashboard, data: { role: 'listener' }, children: [
        {path: "", component: ListenerOverview },
        {path: "browser", component: ListenerBrowser },
    ]},

    {path: "artist", component: ArtistDashboard, canActivate: [AuthGuard], data: { role: 'artist' }, children: [
        {path: "", component: ArtistOverview},
        {path: "upload", component: ArtistOverview},
        {path: "podcast", component: ArtistOverview},
        {path: "insights", component: ArtistOverview},
        {path: "settings", component: ArtistOverview},
    ]},

    // redirect to home page
    {path: "**", redirectTo: ""},
];
