import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Application } from '../models/application.model';
import { EmailService } from '../email.service';
import { ContactDetails } from '../models/ContactDetails.model';
import { ContactService } from '../contact.service';

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
  submitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private contactService: ContactService,
    private renderer: Renderer2
  ) {
    // Modal form
    this.demoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      appliedFor: ['', Validators.required],
      requirement: ['', Validators.required],
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
    if (this.slides && this.slides.length > 0) {
      this.showSlide(this.currentSlide);
      this.slideInterval = setInterval(() => this.moveSlide(1), 5000);
    }

    // ✅ Robust autoplay logic for background video
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      this.renderer.setProperty(video, 'muted', true);
      this.renderer.setProperty(video, 'autoplay', true);
      this.renderer.setProperty(video, 'playsInline', true);

      const tryPlay = () => {
        video.play()
          .then(() => console.log('✅ Background video started automatically'))
          .catch(err => {
            console.warn('⚠️ Autoplay blocked, retrying...', err);
            setTimeout(tryPlay, 1000); // Retry every 1 second until success
          });
      };

      // Delay slightly to ensure DOM is ready
      setTimeout(tryPlay, 500);
    }
  }

  // Contact form submit
  onSubmit(): void {
    if (this.contactForm.valid) {
      const contact: ContactDetails = this.contactForm.value;
      this.contactService.submitContact(contact).subscribe({
        next: (res) => {
          this.toastType = 'success';
          this.toastMessage = res;
          this.showToasting = true;
          this.contactForm.reset();
          setTimeout(() => (this.showToasting = false), 3000);
        },
        error: () => {
          this.toastType = 'error';
          this.toastMessage = 'Failed to send message. Please try again.';
          this.showToasting = true;
          setTimeout(() => (this.showToasting = false), 3000);
        }
      });
    }
  }

  // Resume modal
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

  // Submit application form
  submitForm() {
    if (this.demoForm.invalid) return;

    const application: Application = {
      firstName: this.demoForm.value.firstName,
      lastName: this.demoForm.value.lastName,
      email: this.demoForm.value.email,
      phoneNumber: this.demoForm.value.phoneNumber,
      appliedFor: this.demoForm.value.appliedFor,
      requirement: this.demoForm.value.requirement,
      otherJobTitle: this.demoForm.value.otherJobTitle
    };

    this.submitting = true;

    this.emailService.sendApplication(application, this.resumeFile).subscribe({
      next: () => {
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

  // Slide logic
  moveSlide(direction: number): void {
    if (!this.slides || this.slides.length === 0) return;

    const slidesArray = this.slides.toArray();
    slidesArray[this.currentSlide].nativeElement.classList.remove('active');
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
