import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl = environment.baseUrl;
  
  constructor(private httpclient: HttpClient) { }

  public createNote(url , data) { 
    return this.httpclient.post(this.baseUrl+url, data, { headers:new HttpHeaders().set("email",localStorage.getItem("email"))});
    
  }

  getAllNotes(url) {
    return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("email",localStorage.getItem("email"))})
  }

  updateNote(url, data) {
    return this.httpclient.put(this.baseUrl+url,data,{headers:new HttpHeaders().set("email",localStorage.getItem("email"))})
  }

  trashUnTrashNote(url) {
    return this.httpclient.get(this.baseUrl+url,{headers: new HttpHeaders().set("email",localStorage.getItem("email"))})
  }

  archiveNotes(url) {
    return this.httpclient.get(this.baseUrl+url,{headers: new HttpHeaders().set("email",localStorage.getItem("email"))})
  }

  getTrashNotes(url) {
    return this.httpclient.get(this.baseUrl+url,{headers: new HttpHeaders().set("email",localStorage.getItem("email"))});
  }

  deleteNote(url) {
    return this.httpclient.get(this.baseUrl+url,{headers: new HttpHeaders().set("email",localStorage.getItem("email"))})
  }

  archivedUnarchiveNote(url) {
    return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("email",localStorage.getItem("email"))})
  }
}