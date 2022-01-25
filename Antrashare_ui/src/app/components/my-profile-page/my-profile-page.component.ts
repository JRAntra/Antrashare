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
  }

  OnFileChanged(event: any) {
    const file: File = event.target.files[0];
    console.log(file.name);
  }
  
  triggerInput() {
    console.log("save");
  }
  
  SaveInfo() {
    this.isEditInfo = false;
  }
  
  EditInfo() {
    this.isEditInfo = true;
  }
}
