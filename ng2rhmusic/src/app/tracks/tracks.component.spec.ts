import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksComponent } from './tracks.component';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {AlbumsService} from "app/services/albums/albums.service";
import { TracksService } from "app/services/tracks/tracks.service";

describe('TracksComponent', () => {
  let component: TracksComponent;
  let fixture: ComponentFixture<TracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracksComponent],
      providers: [ 
        { provide: AlbumsService, useClass: MockAlbumService },
        { provide: TracksService, useClass: MockTrackService} 
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
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

  postTrack(name: string) {
    return Observable.of([
      {
        id: 22,
        name: name,
      }
    ]);
  }

  deleteTrack(id: number) {
    return Observable.of({});
  }
}
