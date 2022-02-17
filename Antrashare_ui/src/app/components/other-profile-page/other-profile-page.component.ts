import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-other-profile-page',
  templateUrl: './other-profile-page.component.html',
  styleUrls: ['./other-profile-page.component.scss']
})
export class OtherProfilePageComponent implements OnInit {
  isEditInfo: boolean = false;
  isAdmin: boolean = false;
  userProfile!: UserProfile | null;
  public userInfoFormGroup = new FormGroup({
    NameFormControl: new FormControl('', Validators.required),
    userNameFormControl: new FormControl('', Validators.required),
    userAgeFormControl: new FormControl('', Validators.required),
    userEmailFormControl: new FormControl('', Validators.required),
    userPhoneControl: new FormControl('')
  })

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getProfile(this.getUserName())
      .subscribe(res => {
        this.userProfile = res;
        this.userInfoFormGroup.get("NameFormControl")?.setValue(this.userProfile?.name ? this.userProfile?.name : '');
        this.userInfoFormGroup.get("userNameFormControl")?.setValue(this.userProfile?.userName ? this.userProfile?.userName : '');
        this.userInfoFormGroup.get("userAgeFormControl")?.setValue(this.userProfile?.age ? this.userProfile?.age : '');
        this.userInfoFormGroup.get("userEmailFormControl")?.setValue(this.userProfile?.userEmail ? this.userProfile?.userEmail : '');
        this.userInfoFormGroup.get("userPhoneControl")?.setValue(this.userProfile?.phone ? this.userProfile?.phone : '');
    
      });
      
    this.userInfoFormGroup.disable();
  }

  getUserName() {
    return this.route.snapshot.params['username'];
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
