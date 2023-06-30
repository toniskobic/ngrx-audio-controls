import { Injectable } from '@angular/core';

import { from, EMPTY } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from './audio-controls-state.model';
import { AudioControlsService } from '../services/audio-controls.service';
import { AudioControlsAPIActions, AudioControlsActions } from './audio-controls.actions';

@Injectable()
export class AudioControlsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private audioControlsService: AudioControlsService
  ) { }

  loadAudioControls$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AudioControlsActions.loadAudioControls),
      switchMap(() =>
        from(this.audioControlsService.get()).pipe(
          tap(value => console.log(value)),
          map((audioControls) => AudioControlsAPIActions.audioControlsLoadedSuccess({audioControlsState: audioControls})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateAudioControls$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AudioControlsAPIActions.saveAudioControls),
        withLatestFrom(this.store.select(state => state)),
        tap(([_action, state]) => console.log([_action, state])),
        switchMap(([_action, state]) => from(this.audioControlsService.update(state.audioControls)))
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );
}
