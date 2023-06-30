import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AudioControl } from "../models/audio-control.model";
import { AudioControlsState } from "./audio-controls-state.model";

export const AudioControlsActions = createActionGroup({
  source: 'Audio Controls',
  events: {
    'Load Audio Controls': emptyProps(),
    'Update Audio Control': props<{ audioControl: AudioControl }>(),
    'Set Muted': props<{ muted: boolean }>(),
  }
});


export const AudioControlsAPIActions = createActionGroup({
  source: 'Audio Controls API',
  events: {
    'Audio Controls Loaded Success': props<{ audioControlsState: AudioControlsState }>(),
    'Save Audio Controls': emptyProps()
  }
});
