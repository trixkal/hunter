import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BossesService } from '../../services/bosses.service';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html'
})
export class BossComponent {

  boss: any;
  morphNumber = 1;
  constructor(private activatedRoute: ActivatedRoute,
              private bossesService: BossesService) {
        this.activatedRoute.params.subscribe ( params => {
        this.boss = this.bossesService.getBoss(params.id);
      });

    }
}
