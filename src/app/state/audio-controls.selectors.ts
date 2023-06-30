import { createSelector } from "@ngrx/store";
import { AppState } from "./audio-controls-state.model";

export const selectAudioControlsState = (state: AppState) => state.audioControls;

export const selectAudioControls = createSelector(
  selectAudioControlsState,
  (state) => {
    return state.controls;
  }
);

export const selectMuted = createSelector(
  selectAudioControlsState,
  (state) => {
    return state.muted;
  }
);

