import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from "app/tracks/tracks.component";
import { TracksRouteComponent } from "app/tracks-route/tracks-route.component";

const appRoutes: Routes = [
  {component: AlbumsComponent, path: ''},
  {component: TracksRouteComponent, path: 'album/:id'},
  {path: '*', redirectTo: ''},
];

@NgModule({
  exports: [RouterModule,],
  imports: [RouterModule.forRoot(appRoutes),]
})
export class AppRoutingModule { }