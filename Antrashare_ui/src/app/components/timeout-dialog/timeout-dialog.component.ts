import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeout-dialog',
  templateUrl: './timeout-dialog.component.html',
  styleUrls: ['./timeout-dialog.component.scss']
})
export class TimeoutDialogComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    let cancelBtn = document.querySelector('.timeoutDialogCancelButton')
    let confirmBtn = document.querySelector('.timeoutDialogConfirmButton')
   
    cancelBtn?.addEventListener('click', function() {
      let dialog = document.querySelector('.timeoutDialog')
      console.log(dialog?.classList)
      if (dialog?.classList.contains('timeoutDialog--active')) {
        dialog.classList.remove('timeoutDialog--active')
      }
    })

    confirmBtn?.addEventListener('click', function() {
      let dialog = document.querySelector('.timeoutDialog')
      console.log(dialog?.classList)
      if (dialog?.classList.contains('timeoutDialog--active')) {
        dialog.classList.remove('timeoutDialog--active')
      }
    })
  }

}
