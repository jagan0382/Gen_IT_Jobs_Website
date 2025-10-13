import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CareerCoach } from 'src/app/models/career-coach.model';
import { CareerCoachService } from 'src/app/services/career-coach.service';

@Component({
  selector: 'app-career-coach',
  templateUrl: './career-coach.component.html',
  styleUrls: ['./career-coach.component.css']
})
export class CareerCoachComponent implements OnInit {

   ngOnInit(): void {

        // Scroll-to-Top Functionality
document.getElementById('backToTop12').addEventListener('click', function () {
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
  isSubmitting = false;
    showToasting: boolean = false;
    toastMessage: string = '';
    toastType: 'success' | 'error' = 'success';
    submitting: boolean;



  constructor(private fb: FormBuilder, private service: CareerCoachService) {
    this.demoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      primarySkills: ['', Validators.required],
      mentorship: ['', Validators.required],
      careerBreak: ['', Validators.required],
      fresherStatus: ['', Validators.required],
      experience: [0, Validators.required]
    });
  }

  openModal() {
    this.isModalOpen = true;
    this.successMessage = '';
  }

  closeModal() {
    this.isModalOpen = false;
   this.successMessage = '';
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.resumeFile = file;
      this.resumeRequired = false;
    }
  }


   submitForm() {
  // if (this.demoForm.invalid || !this.resumeFile) {
  //   if (!this.resumeFile) this.resumeRequired = true;
  //   return;
  // }

      if (this.demoForm.invalid) {
    return; // Only stop if form is invalid
  }


  //  if (this.isSubmitting) {
  //   return; // prevent double trigger
  //}

   this.submitting = true;  // Disable button

  //this.isSubmitting = true;
  const data: CareerCoach = this.demoForm.value;

  

  this.service.submitCareerCoach(data, this.resumeFile).subscribe({
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
  });
}

  scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


}