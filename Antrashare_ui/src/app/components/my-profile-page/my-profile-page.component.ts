import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/models/user.models';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.scss']
})
export class MyProfilePageComponent implements OnInit {
  isEditInfo: boolean = false;
  isLogIn!: boolean;
  myProfile!: UserProfile | null;
  public userInfoFormGroup = new FormGroup({
    NameFormControl: new FormControl('',  Validators.required),
    userNameFormControl: new FormControl('',  Validators.required),
    userAgeFormControl: new FormControl('', Validators.required),
    userEmailFormControl: new FormControl('',  Validators.required),
    userPhoneControl: new FormControl('')
  })
  
  constructor(private cacheService: CacheService) { }

  ngOnInit(): void {
    this.isLogIn = this.cacheService.isLogin;
    if (this.isLogIn) {
      this.myProfile = this.cacheService.getUserInfo();
      console.log(this.myProfile)
      this.userInfoFormGroup.get("NameFormControl")?.setValue(this.myProfile?.name ? this.myProfile?.name : '');
      this.userInfoFormGroup.get("userNameFormControl")?.setValue(this.myProfile?.userName ? this.myProfile?.userName : '');
      this.userInfoFormGroup.get("userAgeFormControl")?.setValue(this.myProfile?.age ? this.myProfile?.age : '');
      this.userInfoFormGroup.get("userEmailFormControl")?.setValue(this.myProfile?.userEmail ? this.myProfile?.userEmail : '');
      this.userInfoFormGroup.get("userPhoneControl")?.setValue(this.myProfile?.phone ? this.myProfile?.phone : '');
    }
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
