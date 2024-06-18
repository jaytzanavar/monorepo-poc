import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@wrkspc/poi';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    PoiModule,
    NgChartsModule,
    RouterModule.forChild([{ path: '', component: AdminComponent }]),
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
