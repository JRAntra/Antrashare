import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of, switchMap } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';

@Directive({
  selector: '[UniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUserEmailDirective, multi: true }]
})
export class UniqueUserEmailDirective implements AsyncValidator {

  constructor(private registerService: RegisterService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.valueChanges).pipe(
      delay(1500),
      switchMap(() => {
        return this.registerService.checkUserByEmail(control.value).pipe(
          map((data) => {
            return data ? { UniqueEmail: true } : null;
          }
          )
        )
      })
    )
  }

}