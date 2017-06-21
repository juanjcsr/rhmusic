import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AppRoutingModule } from "app/app.router";
import { HttpModule } from "@angular/http/http";
import {AlbumsService} from "app/services/albums/albums.service";

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [ AlbumsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
