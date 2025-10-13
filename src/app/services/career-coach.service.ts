import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CareerCoach } from '../models/career-coach.model';

@Injectable({
  providedIn: 'root'
})
export class CareerCoachService {
  private apiUrl = 'http://localhost:8082/api/career-coach/submit';

  constructor(private http: HttpClient) {}

  submitCareerCoach(details: CareerCoach, resume?: File): Observable<any> {

    const formData = new FormData();
    
    formData.append('careerCoach', new Blob([JSON.stringify(details)], { type: 'application/json' }));
    if (resume) formData.append('resume', resume, resume.name);

    return this.http.post(this.apiUrl, formData);
  }
}
