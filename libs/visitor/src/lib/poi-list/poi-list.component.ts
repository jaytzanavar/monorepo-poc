import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiEntity, PoiSelectors } from '@wrkspc/poi';

@Component({
  selector: 'wrkspc-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css'],
})
export class PoiListComponent {
  constructor(private store: Store) {}
  pois$ = this.store.select(PoiSelectors.selectAllPoi);

  ngOnInit(): void {
    this.store.dispatch(PoiActions.initPoi());
    this.pois$.subscribe((re) => console.log(re));
  }

  selectPoi(poi: PoiEntity) {
    this.store.dispatch(PoiActions.selectPoi({ poiId: poi.id }));
  }
}
