import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactDetails } from './models/ContactDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:8082/api/contact-details/submit';

  constructor(private http: HttpClient) {}

  submitContact(contact: ContactDetails): Observable<string> {
    const formData = new FormData();
    formData.append('contactDetails', JSON.stringify(contact));

    // responseType: 'text' needs "as 'json'" trick for typing
    return this.http.post<string>(this.baseUrl, formData, {
      responseType: 'text' as 'json'
    });
  }
}
