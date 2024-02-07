import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MailComponent } from './mail/mail.component';
const routes: Routes = [
  { path: '', redirectTo: 'formPage', pathMatch: 'full' },
  { path: 'formPage', component: FormPageComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'mail', component: MailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

