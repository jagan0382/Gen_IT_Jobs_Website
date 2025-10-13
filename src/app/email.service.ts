import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './models/application.model';





@Injectable({
  providedIn: 'root'
})



export class EmailService {

  private apiUrl = 'http://localhost:8082/api/email/send';
  constructor( private http: HttpClient) { }

  

sendApplication(application: Application, file?: File): Observable<any>{

  const formData = new FormData();
  formData.append('application', JSON.stringify(application));

  if (file){
    formData.append('file', file);
  }

  return this.http.post(this.apiUrl, formData);
}

  


}
