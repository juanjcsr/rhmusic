import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { AlbumsService } from "app/services/albums/albums.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';


describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ],
      providers: [ { provide: AlbumsService, useClass: MockAlbumService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
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
}