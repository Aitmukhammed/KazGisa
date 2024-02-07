import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FormsModule } from '@angular/forms';
import { IinDirectiveDirective } from './directives/iin-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MailComponent } from './mail/mail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InvalidEmailDirective } from './directives/invalid-email-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    IinDirectiveDirective,
    FileUploadComponent,
    MailComponent,
    InvalidEmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [InvalidEmailDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
