import { Component, Inject } from '@angular/core';
import { Photo } from '../albums.type';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
@Component({
  selector: 'albums-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Photo,
    public dialogRef: MatDialogRef<ViewComponent>
  ) {}
  onClose() {
    this.dialogRef.close();
  }
}
