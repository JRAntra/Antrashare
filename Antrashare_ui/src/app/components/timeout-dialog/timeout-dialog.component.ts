import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-timeout-dialog',
  templateUrl: './timeout-dialog.component.html',
  styleUrls: ['./timeout-dialog.component.scss'],
})
export class TimeoutDialogComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}
}
