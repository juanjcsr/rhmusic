import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Album} from "app/albums/albums";
import {AlbumsService} from "app/services/albums/albums.service";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {

  @Input() album: Album;

  constructor( private albumService: AlbumsService  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.album);
  }

}
