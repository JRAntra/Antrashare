import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DEFAULT_CONFIRMATION_CONFIG } from '../core/config/dialog.config';
import { ConfirmationDialogComponent } from '../dialogs/confirmation/confirmation.dialog.component';
import { ConfirmationConfig } from '../models/dialog.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  /**
   * constructor
   * @param dialog
   */
  constructor(
    private dialog: MatDialog
  ) { }

  /**
   * is Object or not
   * @param obj 
   * @returns boolean
   */
  private isObject = (obj: any) => obj && typeof obj === 'object';

  /**
   * deep merge objects
   * @param objects
   * @returns object
   */
  private deepMerge(...objects: any[]): object {
    return objects.reduce((previousValue, currentValue) => {
      Object.keys(currentValue).forEach(key => {
        const prev = previousValue[key];
        const curr = currentValue[key];

        if (Array.isArray(prev) && Array.isArray(curr)) {
          previousValue[key] = prev.concat(...curr);
        } else if (this.isObject(prev) && this.isObject(curr)) {
          previousValue[key] = this.deepMerge(prev, curr);
        } else {
          previousValue[key] = curr;
        }
      });

      return previousValue;
    }, {});
  }

  /**
   * open a confirmation dialog
   * @param config 
   * @returns MatDialogRef<ConfirmationDialogComponent>
   */
  open(config: ConfirmationConfig): MatDialogRef<ConfirmationDialogComponent> {
    const finalConfig = this.deepMerge(DEFAULT_CONFIRMATION_CONFIG, config);

    return this.dialog.open(ConfirmationDialogComponent, {
      autoFocus: false,
      disableClose: true,
      data: finalConfig,
      panelClass: 'confirmation-dialog-panel'
    });
  }
}
