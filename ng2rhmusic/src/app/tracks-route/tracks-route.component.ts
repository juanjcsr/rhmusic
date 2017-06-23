import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {Album} from "app/albums/albums";
import {AlbumsService} from "app/services/albums/albums.service";
import {Track} from "app/tracks/tracks";
import { TracksService } from "app/services/tracks/tracks.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-tracks-route',
  templateUrl: './tracks-route.component.html',
  styleUrls: ['./tracks-route.component.css'],
})
export class TracksRouteComponent implements OnInit {

  @Input() album: Album;
  public tracks: Track[];
  public showForm = false;
  public title = "";

  constructor( 
    private albumService: AlbumsService, 
    private trackService: TracksService,
    private route: ActivatedRoute,
) { }

  ngOnInit() {
    console.log("HOLAAA");
    this.route.params
    .switchMap((params: Params) => this.albumService.getTracks(+params['id']))
    .subscribe(tracks => {
      this.tracks = tracks;
    });

    this.route.params
    .switchMap((params: Params) => this.albumService.getAlbum(+params['id']))
    .subscribe(a => {
      this.album = a;
      this.showForm = true;
      this.title = this.album.name;
    });
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
