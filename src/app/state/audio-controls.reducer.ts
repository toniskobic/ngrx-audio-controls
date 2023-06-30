import { createReducer, on } from "@ngrx/store";
import { AudioControlsState } from "./audio-controls-state.model";
import { AudioControlsAPIActions, AudioControlsActions } from "./audio-controls.actions";
import { state } from "@angular/animations";

export const initialState: AudioControlsState = {
  muted: false,
  controls: []
}

export const audioControlsReducer = createReducer(
  initialState,
  on(AudioControlsActions.updateAudioControl, (state, { audioControl }) => {
    const controls = state.controls.map((value) => value.id === audioControl.id ? { ...value, ...audioControl } : value)
    return { ...state, controls };
  }),
  on(AudioControlsActions.setMuted, (state, { muted }) => ({ ...state, muted })),
  on(AudioControlsAPIActions.audioControlsLoadedSuccess, (_state, { audioControlsState }) => ({ ..._state, muted: audioControlsState.muted, controls: audioControlsState.controls }))
)
