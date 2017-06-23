import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksRouteComponent } from './tracks-route.component';
import { Observable } from "rxjs/Observable";
import { AlbumsService } from "app/services/albums/albums.service";
import { TracksService } from "app/services/tracks/tracks.service";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "app/testing/router.stub";
import { Location }                 from '@angular/common';
import { RouterTestingModule } from "@angular/router/testing";

describe('TracksRouteComponent', () => {
  let component: TracksRouteComponent;
  let fixture: ComponentFixture<TracksRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ TracksRouteComponent ],
      providers: [ 
        { provide: AlbumsService, useClass: MockAlbumService },
        { provide: TracksService, useClass: MockTrackService},
        //{ provide: ActivatedRoute, useClass: ActivatedRouteStub},
        //{ provide: Location, useClass: LocationStub },  
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksRouteComponent);
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

  getAlbum(id: number){
    return Observable.of({
      id: id,
      name: "test"
    })
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

  getTracks() {
    return Observable.of([
      {
        id: 26,
        name: "Album 26",
      }]);

  }
}

class MockTrackService {


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


export class LocationStub {
  public params =  { id: 4}
}