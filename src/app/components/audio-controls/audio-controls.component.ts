import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AudioControl } from 'src/app/models/audio-control.model';
import { AppState } from 'src/app/state/audio-controls-state.model';
import { AudioControlsAPIActions, AudioControlsActions } from 'src/app/state/audio-controls.actions';
import { selectAudioControls, selectMuted } from 'src/app/state/audio-controls.selectors';

@Component({
  selector: 'app-audio-controls',
  templateUrl: './audio-controls.component.html',
  styleUrls: ['./audio-controls.component.scss']
})
export class AudioControlsComponent {
  audioControls$: Observable<AudioControl[]> = this.store.select(selectAudioControls);

  muted$: Observable<boolean> = this.store.select(selectMuted);

  constructor(private store: Store<AppState>) {
  }

  updateControl(event: Event, control: AudioControl, mute: boolean) {
    if (mute) {
      const muted = (event.target as HTMLInputElement).checked;
      this.store.dispatch(AudioControlsActions.updateAudioControl({ audioControl: { ...control, muted } }));
    } else {
      const volume = (event.target as HTMLInputElement).valueAsNumber;
      this.store.dispatch(AudioControlsActions.updateAudioControl({ audioControl: { ...control, volume } }));
    }
  }

  // save() {
  //   this.store.dispatch(AudioControlsAPIActions.saveAudioControls());
  // }

  muteAll(event: Event) {
    const muted = (event.target as HTMLInputElement).checked;
    this.store.dispatch(AudioControlsActions.setMuted({ muted }))
  }
}
