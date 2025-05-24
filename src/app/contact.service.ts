import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 

    private baseUrl = 'http://localhost:8082/api/email/contact';
    constructor( private http: HttpClient) { }
  
    
  
    submitContact(contact: Contact): Observable<any>{
  
    const formData = new FormData();
    formData.append('contactform', JSON.stringify(contact));
  
    // if (file){
    //   formData.append('file', file);
    // }
  
    return this.http.post(this.baseUrl, formData);
  }
  
  
  
}
