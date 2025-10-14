import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from '../models/application.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  jobId: number = 0;
  jobDetail: any;

  allJobs: any[] = [
    {
      id: 1,
      title: 'Desktop Engineer',
      designation: 'Desktop Support Engineer',
      location: 'Chennai',
      shift: 'Rotational, WFO',
      experience: '0-2 Years',
      skills: 'Hardware, Networking, Intune',
      postedDate: '09 April 2025',
      openings: 1,
      category: 'Open Systems',
      responsibilities: [
        'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
        'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
         'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
         'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
        
        
      ]
    },
    {
      id: 2,
      title: 'Java Developer',
      designation: 'Backend Developer',
      location: 'Hyderabad',
      shift: 'Day Shift',
      experience: '2-5 Years',
      skills: 'Java, Spring Boot, REST APIs',
      postedDate: '08 April 2025',
      openings: 3,
      category: 'Software Development',
      responsibilities: [
        'Build REST APIs using Spring Boot.',
        'Collaborate with frontend developers.',
        'Write JUnit tests and perform code reviews.'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      designation: 'Angular Developer',
      location: 'Remote',
      shift: 'Flexible',
      experience: '1-4 Years',
      skills: 'Angular, TypeScript, HTML, CSS',
      postedDate: '07 April 2025',
      openings: 2,
      category: 'UI Development',
      responsibilities: [
        'Build responsive web applications.',
        'Work with RESTful APIs.',
        'Optimize UI performance.'
      ]
    },
    // Add entries from id: 4 to id: 20 similarly
     {
      id: 4,
      title: 'UI/UX Developer',
      designation: 'Developer',
      location: 'Hybrid',
      shift: 'Flexible',
      experience: '1-4 Years',
      skills: 'Figma, Photo Shop, Angular, TypeScript, HTML, CSS',
      postedDate: '07 April 2025',
      openings: 5,
      category: 'UI Development',
      responsibilities: [
        'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
        'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
       
      ]
    },
  ];


  ngOnInit(): void {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobDetail = this.allJobs.find(job => job.id === this.jobId);
  }


 showToast: boolean = false;
     showOtherJobField = false;
    
      isModalOpen = false;
      demoForm: FormGroup;
      resumeFile: File | null = null;
      resumeRequired: boolean = false;
     successMessage: string = '';
    showToasting: boolean = false;
    toastMessage: string = '';
    toastType: 'success' | 'error' = 'success';
    submitting: boolean;
    
       constructor( private route: ActivatedRoute, private fb: FormBuilder, private emailService: EmailService) {
         this.demoForm = this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
           appliedFor: ['', Validators.required] ,  
          requirement: ['', Validators.required], 
           otherJobTitle: [''] // Add this new control (initially empty)
         
        });
      }

      onAppliedForChange(event: any) {
    const value = event.target.value;
    if (value === 'Others') {
      this.showOtherJobField = true;
      this.demoForm.get('otherJobTitle')?.setValidators([Validators.required]);
    } else {
      this.showOtherJobField = false;
      this.demoForm.get('otherJobTitle')?.clearValidators();
      this.demoForm.get('otherJobTitle')?.reset();
    }
    this.demoForm.get('otherJobTitle')?.updateValueAndValidity();
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
    
      // submitForm() {
      //   if (this.demoForm.invalid || !this.resumeFile) {
      //     if (!this.resumeFile) this.resumeRequired = true;
      //     return;
      //   }
    
      //   this.closeModal();
      //   this.showToast = true;
    
      //  // this.successMessage = 'Form submitted successfully!';
      //   this.demoForm.reset();
      //   this.resumeFile = null;
    
      //   setTimeout(() => {
      //    // this.successMessage = '';
      //    this.showToast = false;
      //   }, 3000);
      // }
    

       submitForm() {
  // if (this.demoForm.invalid || !this.resumeFile) {
  //   if (!this.resumeFile) this.resumeRequired = true;
  //   return;
  // }

    if (this.demoForm.invalid) {
    return; // Only stop if form is invalid
  }

  
  const appliedForValue =
    this.demoForm.value.appliedFor === 'Others'
      ? this.demoForm.value.otherJobTitle
      : this.demoForm.value.appliedFor;

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
