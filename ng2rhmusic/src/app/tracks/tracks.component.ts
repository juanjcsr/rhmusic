import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Album} from "app/albums/albums";
import {AlbumsService} from "app/services/albums/albums.service";
import {Track} from "app/tracks/tracks";
import { TracksService } from "app/services/tracks/tracks.service";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {

  @Input() album: Album;
  public tracks: Track[];
  public showForm = false;
  public title = "";

  constructor( private albumService: AlbumsService, private trackService: TracksService ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.album ) {
      this.albumService.getTracks(this.album.id).subscribe( t => this.tracks = t);
      this.showForm = true;
      this.title = this.album.name
    } else {
      this.showForm = false;
      this.tracks = [];
      this.title = "";
    }
  }

  public add(name: string) {
    name = name.trim();
    console.log(name);
    if (!name || !this.album.id) { return }
    this.trackService.postTrack(this.album.id, name).subscribe( (d) => {
      this.tracks = d;
    })
  }

  public delete(track: Track) {
    this.trackService.deleteTrack(this.album.id, track.id)
      .subscribe( () => {
        this.tracks = this.tracks.filter( t => t != track);
        
      });
  }

}
