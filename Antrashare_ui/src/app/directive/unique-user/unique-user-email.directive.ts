import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';

@Directive({
  selector: '[UniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUserEmailDirective, multi: true }]
})
export class UniqueUserEmailDirective implements AsyncValidator {

  constructor(private registerService: RegisterService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log(control.value);
    return this.registerService.checkUserByEmail(control.value).pipe(
      map(res => {
        console.log(res);
        return res ? { 'UniqueEmail': true } : null;
      })
    )
  }
}
