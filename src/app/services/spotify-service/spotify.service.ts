import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  SPOTIFY_AUTH = 'BQDs3aNVWTjKfwh0dli1zHFqBez8prhQiaVS6TFs4m68JeMZNvYVncPxbnufBmVF0OURQPNnRRIYCCLVdYAf_dcLQ2pKaHkYan6RrBbLlyENg78RPZ5PtofaLn6e55kpWWlnQykDIWN9ewgRU5rq0IB-ed8C87JKsDlvIxgWk40AlJCzdSGaF8dJEWU';

  constructor(private http: HttpClient) { }

  searchMusic(title): Observable<any> {
    const url = 'https://api.spotify.com/v1/search';
    const params = {q: title, type: 'track'}; 

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.SPOTIFY_AUTH}`);

    return this.http
      .get(url, { headers, observe: 'response', params });
  }
}


//cliente-id:  8e0e4006881841f88b205254cb1335c2
//client_secret? f5bbc6d668a74ad4bd6122a390911ac2