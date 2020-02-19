import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/Service/pdf.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pdftonote',
  templateUrl: './pdftonote.component.html',
  styleUrls: ['./pdftonote.component.css']
})
export class PdftonoteComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private snackbar: MatSnackBar) { }

  pdfService: PdfService = new PdfService(this.http);
  fileName = new FormControl('');

  ngOnInit() {
  }

  onPdfToNote(){
    console.log("in pdf to Note")
    this.pdfService.pdfToNote("pdf/notetopdf?fileName="+this.fileName.value).subscribe(
      (response: any): any => {
        console.log('Note to pdf done =>',response);

        if(response.statuscode == 201) {
          this.snackbar.open("PDF of notes is created successfully ","close", { duration: 2500 });
        }
        else {
          this.snackbar.open("Please check fileName","close",{ duration:2500 });
        }
      }
    )
  }

}