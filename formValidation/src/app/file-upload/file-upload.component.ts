// file-upload.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  constructor(public dataService: DataService, private router: Router, private route: ActivatedRoute) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file && file.type === 'application/pdf') {
      this.dataService.selectedFile = file;
    } else {
      this.dataService.selectedFile = null;
      alert('Пожалуйста, выберите файл формата PDF.');
    }
  }

  isFileValid(): boolean {
    return this.dataService.selectedFile !== null;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['fromFormPage']) {
        this.dataService.saveFormDataFormPage(params);
      } 
    });
  }

}
