import {Component, OnInit, Output} from '@angular/core';
import {AlbumsService} from "app/services/albums/albums.service";
import {Album} from "app/albums/albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {

  public albums: Album[];

  @Output() album: Album;

  constructor(private aService: AlbumsService) { }

  ngOnInit() {
    this.aService.getAlbums().subscribe( d => this.albums = d );
    // this.albums.
  }

  public add(name: string): void {
    name = name.trim();
    if ( !name ) {  return }
    this.aService.postAlbum(name).subscribe( (d) => {
      this.albums.push(d);
    })
  }

  public delete(album: Album) {
    this.aService.deleteAlbum(album.id).subscribe( () => {
      this.albums = this.albums.filter( a => a != album);
    } )
  }

  public getTracks(album: Album){
    this.album = album;
  }

}
