import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { TabButtonsComponent } from './components/tab-buttons/tab-buttons.component';

// Services
import { CharacterService } from './services/character/character.service';
import { EpisodeService } from './services/episode/episode.service';
import { LocationService } from './services/location/location.service';

@NgModule({
  declarations: [
    AppComponent,
    TabButtonsComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CharacterService,
    EpisodeService,
    LocationService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
