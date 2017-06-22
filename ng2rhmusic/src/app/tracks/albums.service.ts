import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  private albumsUrl = 'api/albums';
  private singleAlbumUrl = (id: number) => `api/albums/${id}`;

  constructor(private http: Http) {}

  public getAlbums() {
    return this.http.get(this.albumsUrl)
      .map( d => d.json() )
  }

  public postAlbum(name: string){
    return this.http.post(this.albumsUrl, { name: name })
      .map( d => d.json() )
  }

  public getAlbum(id: number){
    const url = this.albumsUrl + "/" +id
    return this.http.get(url)
      .map( d => d.json() )
  }

  public deleteAlbum(id: number){
    const url = this.singleAlbumUrl(id);
    return this.http.delete(url);
  }

}
