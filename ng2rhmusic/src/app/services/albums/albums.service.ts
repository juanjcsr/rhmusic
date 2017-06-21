import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  private albumsUrl = 'api/albums';

  constructor(private http: Http) {}

  public getAlbums() {
    return this.http.get(this.albumsUrl)
      .map( d => d.json().data )
  }

}
