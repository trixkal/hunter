
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BossComponent } from './components/boss/boss.component';
import { BossesComponent } from './components/bosses/bosses.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bosses', component: BossesComponent },
  { path: 'boss/:id', component: BossComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

