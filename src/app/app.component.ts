import { Component, OnInit } from '@angular/core';
import { AudioControlsState } from './state/audio-controls-state.model';
import { Store } from '@ngrx/store';
import { AudioControlsAPIActions, AudioControlsActions } from './state/audio-controls.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AudioControlsState>){}

  ngOnInit(): void {
    this.store.dispatch(AudioControlsActions.loadAudioControls());
  }

}
