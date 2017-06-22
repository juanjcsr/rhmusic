import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumFormComponent } from './albums/albums.forms.component';
import { AppRoutingModule } from "app/app.router";
import { HttpModule } from "@angular/http";
import {AlbumsService} from "app/services/albums/albums.service";
import { TracksComponent } from './tracks/tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumFormComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ AlbumsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
