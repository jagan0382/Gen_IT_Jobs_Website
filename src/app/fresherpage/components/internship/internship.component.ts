import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/email.service';
import { Application } from 'src/app/models/application.model';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  
      ngOnInit(): void {

        // Scroll-to-Top Functionality
document.getElementById('backToTop18').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
});
}
   
          showToast: boolean = false;
         
         
           isModalOpen = false;
           demoForm: FormGroup;
           successMessage = '';
           resumeFile: File | null = null;
           resumeRequired: boolean = false;
          showToasting: boolean = false;
          toastMessage: string = '';
          toastType: 'success' | 'error' = 'success';
          submitting: boolean;
         
            constructor(private fb: FormBuilder, private emailService: EmailService) {
             this.demoForm = this.fb.group({
               firstName: ['', Validators.required],
               lastName: ['', Validators.required],
               email: ['', [Validators.required, Validators.email]],
               phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
               appliedFor: ['', Validators.required] ,  
              requirement: ['', Validators.required], 
              
             });
           }
         
           openModal() {
             this.isModalOpen = true;
             this.successMessage = '';
           }
         
           closeModal() {
             this.isModalOpen = false;
            // this.successMessage = '';
           }
         
           onFileChange(event: any) {
             const file = event.target.files[0];
             if (file) {
               this.resumeFile = file;
               this.resumeRequired = false;
             }
           }
         
          //  submitForm() {
          //    if (this.demoForm.invalid || !this.resumeFile) {
          //      if (!this.resumeFile) this.resumeRequired = true;
          //      return;
          //    }
         
          //    this.closeModal();
          //    this.showToast = true;
         
          //   // this.successMessage = 'Form submitted successfully!';
          //    this.demoForm.reset();
          //    this.resumeFile = null;
         
          //    setTimeout(() => {
          //     // this.successMessage = '';
          //     this.showToast = false;
          //    }, 3000);
          //  }


          submitForm() {
  // if (this.demoForm.invalid || !this.resumeFile) {
  //   if (!this.resumeFile) this.resumeRequired = true;
  //   return;
  // }

    if (this.demoForm.invalid) {
    return; // Only stop if form is invalid
  }

  // Build Application object
  const application: Application = {
    firstName: this.demoForm.value.firstName,
    lastName: this.demoForm.value.lastName,
    email: this.demoForm.value.email,
    phoneNumber: this.demoForm.value.phoneNumber,
     appliedFor: this.demoForm.value.appliedFor,
      requirement: this.demoForm.value.requirement,   // ✅ now included
      otherJobTitle: this.demoForm.value.otherJobTitle
  };

    this.submitting = true;  // Disable button

  // Call backend API
  this.emailService.sendApplication(application, this.resumeFile).subscribe({
    next: (res) => {
        this.toastMessage = 'Application submitted successfully!';
      this.toastType = 'success';
      this.showToast = true;
      this.closeModal();
      this.demoForm.reset();
      this.resumeFile = null;
      this.submitting = false;

      setTimeout(() => (this.showToast = false), 3000);
    },
        error: (err) => {
      console.error('Failed to submit application', err);

      this.toastMessage = !navigator.onLine
        ? 'Internet connection failed. Please check your connection and try again.'
        : 'Failed to submit application. Please try again.';
      this.toastType = 'error';
      this.showToast = true;
      this.submitting = false;

      setTimeout(() => (this.showToast = false), 3000);
    }
  });}
     
    
          
   
                     scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
       


}
