import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-interview-service',
  templateUrl: './interview-service.component.html',
  styleUrls: ['./interview-service.component.css']
})
export class InterviewServiceComponent implements OnInit {

  
            showToast: boolean = false;
           
           
             isModalOpen = false;
             demoForm: FormGroup;
             successMessage = '';
             resumeFile: File | null = null;
             resumeRequired: boolean = false;
           
             constructor(private fb: FormBuilder) {
               this.demoForm = this.fb.group({
                 firstName: ['', Validators.required],
                 lastName: ['', Validators.required],
                 email: ['', [Validators.required, Validators.email]],
                 phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
                
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
           
             submitForm() {
               if (this.demoForm.invalid || !this.resumeFile) {
                 if (!this.resumeFile) this.resumeRequired = true;
                 return;
               }
           
               this.closeModal();
               this.showToast = true;
           
              // this.successMessage = 'Form submitted successfully!';
               this.demoForm.reset();
               this.resumeFile = null;
           
               setTimeout(() => {
                // this.successMessage = '';
                this.showToast = false;
               }, 3000);
             }
           
            
     
    
  
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
