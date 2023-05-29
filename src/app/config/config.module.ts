import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { DialogRangeComponent } from './dialog-range/dialog-range.component';

@NgModule({
  declarations: [
    ConfigComponent,
    DialogRangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    ConfigComponent
  ],
  providers: [  ]
})
export class ConfigModule { }
