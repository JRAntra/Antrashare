import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.scss']
})
export class MyProfilePageComponent implements OnInit {
  isEditInfo: boolean = false;
  
  public userInfoFormGroup = new FormGroup({
    userFnameFormControl: new FormControl('',  Validators.required),
    userLnameFormControl: new FormControl('', Validators.required),
    userEmailFormControl: new FormControl('',  Validators.required),
    userBDFormControl: new FormControl('')
  })
  
  constructor() { }

  ngOnInit(): void {
    this.userInfoFormGroup.disable();
  }

  onFileChanged(event: any) {
    const file: File = event.target.files[0];
    console.log(file.name);
  }
  
  onTriggerInput() {
    console.log("save");
  }
  
  onSaveInfo() {
    this.isEditInfo = false;
    this.userInfoFormGroup.disable();
  }
  
  onEditInfo() {
    this.isEditInfo = true;
    this.userInfoFormGroup.enable();
  }
}
