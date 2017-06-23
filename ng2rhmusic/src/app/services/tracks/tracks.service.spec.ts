import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import { TracksService } from './tracks.service';

describe('TracksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        TracksService,
        { provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  it('should be created', inject([TracksService], (service: TracksService) => {
    expect(service).toBeTruthy();
  }));

  it('should create a new Track',
    inject([TracksService, XHRBackend], (service: TracksService, mockBackend: MockBackend) => {
      const mockResponse = [{id: 1, name: "album"}];
      mockBackend.connections.subscribe((conn) => {
        conn.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })))
      });
      const trackName = "new track";
      service.postTrack(1,trackName).subscribe( (track) => {
        expect(track).toBeTruthy();
      })
    })
  )


});
