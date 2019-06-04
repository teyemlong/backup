import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseurl:string='http://localhost:8084/';

  constructor(private httpClient: HttpClient) { }

  getContacts(){
    return this.httpClient.get(this.baseurl+'contacts');
  }
}
