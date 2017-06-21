import { TestBed, inject } from '@angular/core/testing';
import {HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions} from '@angular/http';
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
      const mockResponse = {
        data: [
          { id: 0, name: 'Album 0' },
          { id: 1, name: 'Album 1' },
          { id: 2, name: 'Album 2' },
          { id: 3, name: 'Album 3' },
        ]
      }
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
});
