import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  loading = new Subject<boolean>();

  constructor(private snack: MatSnackBar) { }
  showMessage(msg: string){
    this.snack.open(msg, 'Aceptar', {
      duration: 3000,
    });
  }
}
