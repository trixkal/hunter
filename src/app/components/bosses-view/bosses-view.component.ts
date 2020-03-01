import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bosses-view',
  templateUrl: './bosses-view.component.html'
})
export class BossesViewComponent implements OnInit {

  @Input() boss: any = {};
  morphNumber = 1;
  constructor(private router: Router) {}
  @Input() index: number;

  ngOnInit(): void {
  }

  viewBoss() {
    this.router.navigate( ['/boss', this.index]);
  }

}
