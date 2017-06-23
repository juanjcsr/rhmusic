import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Album} from "app/albums/albums";
import {AlbumsService} from "app/services/albums/albums.service";
import {Tracks} from "app/tracks/tracks";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {

  @Input() album: Album;
  public tracks: Tracks[];

  constructor( private albumService: AlbumsService  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.album ) {
      this.albumService.getTracks(this.album.id).subscribe( t => this.tracks = t);
    }
    
  }

}
