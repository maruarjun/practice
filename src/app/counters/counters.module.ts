import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountersRoutingModule } from './counters-routing.module';
import { CountersComponent } from './counters.component';
import { CounterAComponent } from './counter-a/counter-a.component';
import { CounterBComponent } from './counter-b/counter-b.component';


@NgModule({
  declarations: [
    CountersComponent,
    CounterAComponent,
    CounterBComponent
  ],
  imports: [
    CommonModule,
    CountersRoutingModule
  ]
})
export class CountersModule { }
