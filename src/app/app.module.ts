import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BossComponent } from './components/boss/boss.component';
import { BossesComponent } from './components/bosses/bosses.component';
import { BossesViewComponent } from './components/bosses-view/bosses-view.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { APP_ROUTING } from './app.routes';
import { BossesService } from './services/bosses.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BossComponent,
    BossesComponent,
    BossesViewComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [BossesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
