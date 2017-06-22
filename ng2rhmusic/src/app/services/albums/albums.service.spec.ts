import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import { AlbumsService } from './albums.service';

describe('AlbumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AlbumsService,
        {provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([AlbumsService], (service: AlbumsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get an observable from the endpoint', 
    inject([AlbumsService, XHRBackend], (service: AlbumsService, mockBackend: MockBackend) => {
      const mockResponse = [
          { id: 0, name: 'Album 0' },
          { id: 1, name: 'Album 1' },
          { id: 2, name: 'Album 2' },
          { id: 3, name: 'Album 3' },
        ];
      mockBackend.connections.subscribe((conn) => {
        conn.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })))
      });


      service.getAlbums().subscribe((albums) => {
        console.log('ALBUMS', albums)
        expect(albums.length).toBe(4);
      });
    }
  ));

  it('should return the value when creating a new album to the endpoint',
    inject([AlbumsService, XHRBackend], (service: AlbumsService, mockBackend: MockBackend) => {
      const mockResponse = { id: 4, name: "album 4"}
      mockBackend.connections.subscribe(( conn ) => {
        expect(conn.request.method).toBe(RequestMethod.Post);
        conn.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })))
      });
      const testString = "album 4";
      service.postAlbum(testString).subscribe( (album) => {
        expect(album).toBeTruthy();
        expect(album.name).toBe("album 4");
      });
    })
  );

  it('should return a single album',
   inject([AlbumsService, XHRBackend], (service: AlbumsService, mockBackend: MockBackend) => {
    const mockResponse = { id: 5, name: "single album"};
    mockBackend.connections.subscribe( (conn) => {
      expect(conn.request.method).toBe(RequestMethod.Get);
      expect(conn.request.url).toBe("api/albums/5");
      conn.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse) 
      })))
    });

    const albumToGet = 5;
    service.getAlbum(5).subscribe( (album) => {
      expect(album).toBeTruthy();
      expect(album.id).toBe(5);
    });
   })
  );
});
