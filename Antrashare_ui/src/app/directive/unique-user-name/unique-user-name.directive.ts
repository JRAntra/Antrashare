import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of, switchMap } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';

@Directive({
  selector: '[UniqueUserName]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUserNameDirective, multi: true }]
})
export class UniqueUserNameDirective implements AsyncValidator {

  constructor(private registerService: RegisterService) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.valueChanges).pipe(
      delay(1500),
      switchMap(() => {
        return this.registerService.checkUserByUsername(control.value).pipe(
          map((data) => {
            return data ? { UniqueUserName: true } : null;
          }
          )
        )
      })
    )
  }

}
