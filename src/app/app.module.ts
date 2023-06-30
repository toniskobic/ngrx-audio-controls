import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AudioControlsComponent } from './components/audio-controls/audio-controls.component';
import { audioControlsReducer } from './state/audio-controls.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AudioControlsEffects } from './state/audio-control.effects';
import { HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioControlsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ audioControls: audioControlsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([AudioControlsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
