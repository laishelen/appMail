import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-mail',
  templateUrl: './app-mail.component.html',
  styleUrls: ['./app-mail.component.css']
})
export class AppMailComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top'

  res: string = '';
  err: string = '';

  constructor(
    private emailService: EmailService, 
    private _snackBar: MatSnackBar) { }  

  onSubmit(form: NgForm) {
    const { to, subject, text } = form.value;
    this.emailService.sendEmail(to, subject, text).subscribe ( 
      res => this.res = res,
      err => this.err = err
    );

      this._snackBar.open('E-mail enviado com sucesso', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2500,    
        panelClass: ['custom-style']
      });      
  }
}
