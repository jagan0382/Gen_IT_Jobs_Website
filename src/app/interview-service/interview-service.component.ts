import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { Application } from '../models/application.model';

@Component({
  selector: 'app-interview-service',
  templateUrl: './interview-service.component.html',
  styleUrls: ['./interview-service.component.css']
})
export class InterviewServiceComponent implements OnInit {

  
                  showToast: boolean = false;
    
    
      isModalOpen = false;
      demoForm: FormGroup;
      resumeFile: File | null = null;
      resumeRequired: boolean = false;
     successMessage: string = '';
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
      requirement: this.demoForm.value.requirement   // ✅ now included
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

  

  faqs = [
    { 
      question: 'What is an Interview as a Service?', 
      answer: 'Interview as a Service (IaaS) is a comprehensive interview solution where companies outsource their interviews to a specialized provider. Its objectives include streamlining the hiring process, conducting quality interviews on time, ensuring fair and consistent evaluations, and leveraging expertise to identify top talent efficiently.', 
      open: false 
    },
    { 
      question: 'Who are these external interview panels?', 
      answer: 'We have a 3000+ external interview panel who are industry experts in over 250+ technologies. These expert panels conduct interviews and ensure quality and accurate assessment of candidates.', 
      open: false 
    },
    { 
      question: 'What is technical interview outsourcing?', 
      answer: 'Outsourcing interviews offers several benefits, including access to industry experts, streamlined processes, time and cost-effectiveness, scalability, and increased objectivity. It allows companies to focus on core operations, ensures fair evaluations, and leverages external resources to identify the best-fit candidates efficiently.', 
      open: false 
    },
    { 
      question: 'What are the benefits of Interview as a Service?', 
      answer: 'Interview as a Service offers various benefits, such as scalability, time efficiency, cost savings, expert interviewers, reduced bias, positive candidate experience, and an efficient hiring process.', 
      open: false 
    },
    { 
      question: 'Which is the top Interview as a Service platform in India?', 
      answer: 'Gen IT is one of the top Interview as a Service platforms in India.', 
      open: false 
    },
    { 
      question: 'What are the features of Gen IT Interview as a Service?', 
      answer: [
        '3000+ expert interviewer panel',
        '6 hours of TAT',
        'Resume Scoring',
        'Technical, soft & leadership skill assessment',
        'AI JD creation',
        'AI-generated screening questions'
      ], 
      open: false 
    }
  ];
  

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }


   ngOnInit(): void {

        // Scroll-to-Top Functionality
document.getElementById('backToTop13').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
});
}



}
