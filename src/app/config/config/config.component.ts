import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { ConfigService } from '../services/config.service';
import { Config } from '../models/config.models';
import { DialogRangeComponent } from '../dialog-range/dialog-range.component';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  config: Config;

  formGroup = this._formBuilder.group({
    enableWifi: '',
  });

  constructor(private _formBuilder: FormBuilder,
              private configService: ConfigService,
              public dialog: MatDialog) {
    this.config = this.configService.getConfig();
  }

  submitForm(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRangeComponent, {
      data: {name: 'campo name', animal: 'animal'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', { result });
      //this.animal = result;
    });
  }
}
