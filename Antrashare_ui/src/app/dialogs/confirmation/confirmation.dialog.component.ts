import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationConfig } from 'src/app/models/dialog.model';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation.dialog.component.html',
  styleUrls: ['../../css/dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmationConfig) { }

  ngOnInit() {
  }

}
