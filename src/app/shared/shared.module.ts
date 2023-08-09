import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeComponent } from './gauge/gauge.component';

@NgModule({
  declarations: [GaugeComponent],
  imports: [CommonModule],
  exports: [GaugeComponent],
})
export class SharedModule {}
