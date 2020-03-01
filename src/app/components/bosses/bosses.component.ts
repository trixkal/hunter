import { Component, OnInit } from '@angular/core';
import { BossesService, Boss } from '../../services/bosses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.component.html'
})
export class BossesComponent implements OnInit {
  bosses: Boss[];
  constructor(private bossesService: BossesService, private router: Router) { }

  ngOnInit(): void {
    this.bosses = this.bossesService.getBosses();
  }

  viewBoss(idx: number) {
    this.router.navigate( ['/boss', idx]);
  }
}
