import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
})
export class MailComponent implements OnDestroy {
  email: string = '';
  user: any = {};
  isValid: any = true;
  private validationSubscription: Subscription;

  constructor(
    private dataService: DataService,
  ) {
    this.validationSubscription = this.dataService.isValid$.subscribe(
      (isValid) => {
        this.isValid = isValid;
      }
    );
  }

  validateAndShowModal(): void {
    if (this.isValid) {
      this.dataService.openDialog();
    }
  }

  ngOnDestroy() {
    this.validationSubscription.unsubscribe();
  }
}
