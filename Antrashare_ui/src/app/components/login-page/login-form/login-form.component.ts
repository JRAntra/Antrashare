import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(public dialog: MatDialog) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&.,])[A-Za-z\d$@$!%*?&].{5,}'),
      ]),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void { }

  submitForm() {
    console.log('Valid?', this.loginForm.valid); // true or false
    console.log(this.loginForm.value);
  }
  openDialog(): void {
    const user: any = this.loginForm.get('username');
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {
        dataKey: user,
      },
    });
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'log-in-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public username: any
  ) { }

  ngOnInit() {
    console.log(this.username.dataKey.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void { }
}
