import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorecardComponent } from './scorecard/scorecard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ScorecardComponent
  ],
  declarations: [ScorecardComponent]
})
export class ComponentsModule { }
