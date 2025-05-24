import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('slide') slides!: QueryList<ElementRef>;

  currentSlide: number = 0;
  slideInterval: any;

  contactForm!: FormGroup;
  demoForm: FormGroup;
  resumeFile: File | null = null;
  resumeRequired: boolean = false;
  showToast: boolean = false;
  isModalOpen: boolean = false;
  successMessage: string = '';
  showToasting: boolean = false;
toastMessage: string = '';
toastType: 'success' | 'error' = 'success';


  constructor(private fb: FormBuilder) {
    // Modal form
    this.demoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  ngOnInit(): void {
    // Contact form
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });

    // Scroll-to-top button
    const backToTopBtn = document.getElementById('backToTop5');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  ngAfterViewInit(): void {
    if (!this.slides || this.slides.length === 0) return;

    this.showSlide(this.currentSlide);

    // Auto-slide every 5 seconds
    this.slideInterval = setInterval(() => {
      this.moveSlide(1);
    }, 5000);

    // Ensure video plays
    const video = document.getElementById("bg-video") as HTMLVideoElement;
    if (video) {
      video.play().catch(error => console.log("Autoplay prevented:", error));
    }
  }


  // Contact form submit
onSubmit(): void {
  if (this.contactForm.valid) {
    console.log('Form Submitted:', this.contactForm.value);

    this.toastMessage = 'Your message has been sent successfully!';
    this.toastType = 'success';
    this.showToasting = true;

    this.contactForm.reset();
  } else {
    this.toastMessage = 'Please fix the errors before submitting.';
    this.toastType = 'error';
    this.showToasting = true;
  }

  setTimeout(() => {
    this.showToasting = false;
  }, 3000);
}



  // Resume modal form
  openModal() {
    this.isModalOpen = true;
    this.successMessage = '';
  }

  closeModal() {
    this.isModalOpen = false;
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
    this.demoForm.reset();
    this.resumeFile = null;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  // Slide logic
  moveSlide(direction: number): void {
    if (!this.slides || this.slides.length === 0) return;

    const slidesArray = this.slides.toArray();
    slidesArray[this.currentSlide].nativeElement.classList.remove("active");

    this.currentSlide = (this.currentSlide + direction + slidesArray.length) % slidesArray.length;

    this.showSlide(this.currentSlide);
  }

  showSlide(index: number): void {
    const slidesArray = this.slides.toArray();

    slidesArray.forEach(slide => {
      slide.nativeElement.style.opacity = '0';
      slide.nativeElement.style.transform = 'scale(0.9)';
    });

    slidesArray[index].nativeElement.style.opacity = '1';
    slidesArray[index].nativeElement.style.transform = 'scale(1)';
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
