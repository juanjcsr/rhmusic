import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Album} from "app/albums/albums";

@Injectable()
export class AlbumsService {

  private albumsUrl = 'api/albums';
  private singleAlbumUrl = id =>`api/albums/${id}`;
  private albumTracksUrl = id => `api/albums/${id}/tracks`;

  constructor(private http: Http) {}


  /*
   * TODO:
   * According to Angular.io docs, simple http requests should return a Promise 
   * insted of an Observable. 
   */

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

  public getTracks(id: number){
    const albumUrl = this.albumTracksUrl(id);

    return this.http.get(albumUrl).map( d => d.json() );
  }


}
