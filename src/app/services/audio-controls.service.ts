import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AudioControlsState } from '../state/audio-controls-state.model';

@Injectable({
  providedIn: 'root',
})
export class AudioControlsService {
  private readonly url = '/api/audioControls';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  get(): Observable<AudioControlsState> {
    return this.http.get<AudioControlsState>(this.url);
  }

  update(data: AudioControlsState): Observable<void> {
    return this.http.put<void>(this.url, data, this.httpOptions);
  }
}
