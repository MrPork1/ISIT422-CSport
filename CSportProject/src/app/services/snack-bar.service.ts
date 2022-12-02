import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public open(message: string, action = 'success', duration:boolean, durationLength: number):void {
    if (duration) {
      this.snackBar.open(message, action,
        {duration: durationLength});
    } else {
      this.snackBar.open(message, action);
    }
  }
}