import { AudioControl } from "../models/audio-control.model";

export interface AppState {
  audioControls: AudioControlsState
}

export interface AudioControlsState {
  muted: boolean;
  controls: AudioControl[]
}
