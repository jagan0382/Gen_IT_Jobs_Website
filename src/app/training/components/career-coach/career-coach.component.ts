import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      primarySkillset: ['', Validators.required],
      careerBreak: ['', Validators.required],
      fresherStatus: ['', Validators.required],
      experience: [0,  Validators.required]
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

 
}