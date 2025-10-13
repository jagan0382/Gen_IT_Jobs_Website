import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentorship } from '../models/mentorship.model';

@Injectable({
  providedIn: 'root'
})
export class MentorshipService {
  private apiUrl = 'http://localhost:8082/api/mentorship/submit';

  constructor(private http: HttpClient) {}

  // submitMentorship(details: Mentorship): Observable<any> {
  //   return this.http.post(this.apiUrl, details);
  // }

  submitMentorship(details: Mentorship, resume?: File): Observable<any> {
  const formData = new FormData();

  // Append mentorship details
  formData.append('mentorship', new Blob([JSON.stringify(details)], { type: 'application/json' }));

  // Append resume if available
  if (resume) {
    formData.append('resume', resume, resume.name);
  }

  return this.http.post(this.apiUrl, formData);
}

}