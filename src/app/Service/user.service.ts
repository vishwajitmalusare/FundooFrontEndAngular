import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpService: HttpService = new HttpService(this.httpclient, this.router);
  baseUrl = environment.baseUrl;

  constructor(
    private httpclient: HttpClient,
    private router: Router
  ) { }

  public userLogin(data) {
    return this.httpService.postRequest("userservice/login", data);
  }

  public usreRegister(data) {
    return this.httpService.postRequest("userservice/register", data);
  }

  public sendResetLink(data) {
    return this.httpService.getRequest(data);
  }

  public passwordReset(data) {
    return this.httpService.getRequest(data);
  }
}