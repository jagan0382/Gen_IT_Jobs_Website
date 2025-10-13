import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/email.service';
import { Application } from 'src/app/models/application.model';
import { Mentorship } from 'src/app/models/mentorship.model';
import { MentorshipService } from 'src/app/services/mentorship.service';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.css']
})
export class MentorshipComponent implements OnInit {




  ngOnInit(): void {

    // Scroll-to-Top Functionality
    document.getElementById('backToTop9').addEventListener('click', function () {
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

   constructor(private fb: FormBuilder, private mentorshipService: MentorshipService) {
   this.demoForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  email: ['', [Validators.required, Validators.email]],
  primarySkills: ['', Validators.required],
  primaryExperience: ['0', [Validators.required, Validators.min(0)]],
  secondarySkills: ['', Validators.required],
  secondaryExperience: ['0', [Validators.required, Validators.min(0)]],
  careerCoachExperience: ['', Validators.required], // <-- null start, expect true/false
  availabilityHours: ['', [Validators.required, Validators.min(1)]],
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




//   submitForm() {
//     if (this.demoForm.invalid || !this.resumeFile) {
//       if (!this.resumeFile) this.resumeRequired = true;
//       return;
//     }

//     // Build Application object
// const application: Application = {
//   firstName: this.demoForm.value.firstName,
//   lastName: this.demoForm.value.lastName,
//   email: this.demoForm.value.email,
//   phoneNumber: this.demoForm.value.phoneNumber,
//   primarySkills: this.demoForm.value.primarySkills,
//   primaryExperience: this.demoForm.value.primaryExperience,
//   secondarySkills: this.demoForm.value.secondarySkills,
//   secondaryExperience: this.demoForm.value.secondaryExperience,
//   careerCoachExperience: this.demoForm.value.careerCoachExperience,
//   availabilityHours: this.demoForm.value.availabilityHours,
//   resumeFile: this.resumeFile
// };


//     // Call backend API
//     this.emailService.sendApplication(application, this.resumeFile).subscribe({
//       next: (res) => {
//         this.successMessage = 'Application submitted successfully!';
//         this.showToast = true;
//         this.closeModal();
//         this.demoForm.reset();
//         this.resumeFile = null;

//         setTimeout(() => (this.showToast = false), 3000);
//       },
//       error: (err) => {
//         console.error('Failed to submit application', err);
//         this.successMessage = 'Failed to submit application. Please try again.';
//         this.showToast = true;
//         setTimeout(() => (this.showToast = false), 3000);
//       }
//     });
//   }


submitForm() {
  //   if (this.demoForm.invalid || !this.resumeFile) {
  //   if (!this.resumeFile) this.resumeRequired = true;
  //   return;
  // }

  
    if (this.demoForm.invalid) {
    return; // Only stop if form is invalid
  }



    const mentorship: Mentorship = {
      firstName: this.demoForm.value.firstName,
      lastName: this.demoForm.value.lastName,
      email: this.demoForm.value.email,
      phoneNumber: this.demoForm.value.phoneNumber,
      primarySkills: this.demoForm.value.primarySkills,
      primaryExperience: this.demoForm.value.primaryExperience,
      secondarySkills: this.demoForm.value.secondarySkills,
      secondaryExperience: this.demoForm.value.secondaryExperience,
      careerCoachExperience: this.demoForm.value.careerCoachExperience,
      availabilityHours: this.demoForm.value.availabilityHours
    };


  this.submitting = true;  // Disable button

  // Create FormData
  const formData = new FormData();
  formData.append('mentorship', new Blob([JSON.stringify(mentorship)], { type: 'application/json' }));
  if (this.resumeFile) {
    formData.append('resume', this.resumeFile);
  }




    this.mentorshipService.submitMentorship(mentorship,  this.resumeFile).subscribe({
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
