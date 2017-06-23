import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { AlbumsService } from "app/services/albums/albums.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {TracksComponent} from "app/tracks/tracks.component";
import { TracksService } from "app/services/tracks/tracks.service";

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let albumsService: AlbumsService;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsComponent, TracksComponent ],
      providers: [ 
        { provide: AlbumsService, useClass: MockAlbumService },
        { provide: TracksService, useClass: MockTrackService} 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    albumsService = TestBed.get(AlbumsService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize album property', () => {
    expect(component.albums).toBeTruthy();
    expect(component.albums).toContain({id: 26, name: "Album 26"})
  });

  it('should create album property', () => {
    component.add("new album")
    expect(component.albums.length).toBe(2);
    expect(component.albums[1]).toContain({id: 22, name: "new album"});
  });

  it('should delete an album', () => {
    component.add("to delete");
    expect(component.albums.length).toBe(2);
    component.delete(component.albums[1]);
    expect(component.albums.length).toBe(1);
    expect(component.albums[0]).toEqual({
        id: 26,
        name: "Album 26",
      });
  });
});

class MockAlbumService {
  
  getAlbums() {
    return Observable.of([
      {
        id: 26,
        name: "Album 26",
      }]);

  }

  postAlbum(name: string) {
    return Observable.of([
      {
        id: 22,
        name: name,
      }
    ]);
  }

  deleteAlbum(id: number) {
    return Observable.of({});
  }
}

class MockTrackService {
  
  getTracks() {
    return Observable.of([
      {
        id: 26,
        name: "Album 26",
      }]);

  }

  postTracks(name: string) {
    return Observable.of([
      {
        id: 22,
        name: name,
      }
    ]);
  }

  deleteTracks(id: number) {
    return Observable.of({});
  }
}