import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class TracksService {

  private tracksUrl = (albumId, id?) => `api/albums/${albumId}/tracks/${id}`

  constructor(private http: Http) { }

  /*
   * TODO:
   * According to Angular.io docs, simple http requests should return a Promise 
   * insted of an Observable. 
   */

  public postTrack(albumId: number, name: string) {
    const url = this.tracksUrl(albumId, "");
    console.log(url);
    return this.http.post(url, {name: name})
      .map( d => d.json());
  }

  public deleteTrack(albumId: number, id: number) {
    const url = this.tracksUrl(albumId, id);
    return this.http.delete(url);
  }

}
