import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type DialogData = {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-range',
  templateUrl: './dialog-range.component.html',
  styleUrls: ['./dialog-range.component.scss']
})
export class DialogRangeComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogRangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick() {
    console.log('onNoClick');
  }
}
