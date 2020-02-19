import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  baseUrl = environment.baseUrl;

  constructor(private httpclient: HttpClient) { }

  public pdfToNote(url) {
    return this.httpclient.get(this.baseUrl+url,{ headers: new HttpHeaders()
      .set("token",localStorage.getItem("token"))});
  }
}