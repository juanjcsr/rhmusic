import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Album} from "app/albums/albums";

@Injectable()
export class AlbumsService {

  private albumsUrl = 'api/albums';
  private singleAlbumUrl = id =>`api/albums/${id}`

  constructor(private http: Http) {}

  public getAlbums() {
    return this.http.get(this.albumsUrl)
      .map( d => d.json() )
  }

  public getAlbum(id: number) {
    const albumUrl = this.singleAlbumUrl(id);
    return this.http.get(albumUrl)
      .map( d => d.json() )
  }

  public postAlbum(name: string){
    return this.http.post(this.albumsUrl, { name: name })
      .map( d => d.json() )
  }

  public deleteAlbum(id: number) {
    const albumUrl = this.singleAlbumUrl(id);

    return this.http.delete(albumUrl);
  }

}
