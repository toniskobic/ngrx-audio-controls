import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AudioControl } from 'src/app/models/audio-control.model';
import { AppState } from 'src/app/state/audio-controls-state.model';
import { selectAudioControls, selectMuted } from 'src/app/state/audio-controls.selectors';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  audioControls$: Observable<AudioControl[]> = this.store.select(selectAudioControls);

  muted$: Observable<boolean> = this.store.select(selectMuted);

  constructor(private store: Store<AppState>) {
  }

}
