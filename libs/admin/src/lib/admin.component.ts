import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiEntity, PoiSelectors } from '@wrkspc/poi';
import { ChartDataset } from 'chart.js';
import { Subscription } from 'rxjs';
import { AdminService } from './admin.service';

@Component({
  selector: 'wrkspc-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  dataSets: ChartDataset[] = [];
  labels: string[] = [];

  constructor(private store: Store, private adminService: AdminService) {}
  ngOnInit(): void {
    this.subscription = this.store
      .select(PoiSelectors.selectAllPoi)
      .subscribe(pois => this.buildChart(pois));
    this.store.dispatch(PoiActions.initPoi());
  }

  private buildChart(pois: PoiEntity[]) {
    this.labels = pois.map((poi) => poi.name);
    this.dataSets = [
      {
        data: this.adminService.getStatistics(pois),
      },
    ];
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
