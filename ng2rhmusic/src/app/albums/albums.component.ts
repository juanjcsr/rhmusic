import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "app/services/albums/albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public albums: any;

  constructor(private aService: AlbumsService) { }

  ngOnInit() {
    this.aService.getAlbums().subscribe( d => this.albums = d );
    // this.albums.
  }

}
