import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { Application } from '../models/application.model';

@Component({
  selector: 'app-applying',
  templateUrl: './applying.component.html',
  styleUrls: ['./applying.component.css']
})
export class ApplyingComponent  {
  //showSuccessPopup: boolean;

 showSuccessPopup1 = false;
   applyForm: FormGroup;
   successMessage: string = '';
   selectedFile: File | null = null;
   message: string = '';
  
  
 
   constructor(private fb: FormBuilder , private emailSerivce: EmailService) {
     this.applyForm = this.fb.group({
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       currentCompany: ['', Validators.required],
       position: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Ensures only 10-digit phone number
       country: ['', Validators.required],
       requirement: ['', Validators.required],
       file: ['']
     });
   }
 
  //  formData = {
  //    firstName: '',
  //    lastName: '',
  //    currentCompany: '',
  //    position:'',
  //    email: '',
  //    phoneNumber: '',
  //    country: '',
  //    requirement: '',
  //    file: ''
  //  };
 
  application: Application = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    appliedFor: '',
    requirement: ''
   // currentCompany: '',
    //position: '',
    //country: '',
    //requirement: ''
    
  };




   onSubmit() {

            // Scroll-to-Top Functionality
document.getElementById('backToTop1').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
});
   
     

    if (this.applyForm.valid) {
      // Update the application object with form values
      this.application.firstName = this.applyForm.value.firstName;
      this.application.lastName = this.applyForm.value.lastName;
      this.application.email = this.applyForm.value.email;
      this.application.phoneNumber = this.applyForm.value.phoneNumber;
      //this.application.currentCompany = this.applyForm.value.currentCompany;
      //this.application.position = this.applyForm.value.position;
      //this.application.country = this.applyForm.value.country;
      //this.application.requirement = this.applyForm.value.requirement;
      
  
      this.showSuccessPopup1 = true;
  
      this.emailSerivce.sendApplication(this.application, this.selectedFile)
        .subscribe({
          next: response => {
            this.message = 'Application submitted successfully!';
          },
          error: error => {
            this.message = 'Error submitting application: ' + error.message;
          }
        });
  
      // Reset the form after submission
      this.applyForm.reset();
  
      // Hide popup after 3 seconds
      setTimeout(() => {
        this.showSuccessPopup1 = false;
      }, 6000);
    } else {
      this.message = 'Please fill in all required fields.';
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Selected file:', this.selectedFile);
  }

  closePopup() {
    this.showSuccessPopup1 = false;
  }




        
                                   scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  


}
