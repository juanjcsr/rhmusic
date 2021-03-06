import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AppRoutingModule } from "app/app.router";
import { HttpModule } from "@angular/http";
import {AlbumsService} from "app/services/albums/albums.service";
import { TracksComponent } from './tracks/tracks.component';
import { TracksService } from "app/services/tracks/tracks.service";
import { TracksRouteComponent } from './tracks-route/tracks-route.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    TracksComponent,
    TracksRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ AlbumsService, TracksService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
