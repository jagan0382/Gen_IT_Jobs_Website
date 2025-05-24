import { Component, OnInit } from '@angular/core';


declare var Swiper: any; // Required for global Swiper


@Component({
  selector: 'app-resume-checker',
  templateUrl: './resume-checker.component.html',
  styleUrls: ['./resume-checker.component.css']
})
export class ResumeCheckerComponent implements OnInit {

  constructor() { }

    ngOnInit(): void {

        // Scroll-to-Top Functionality
document.getElementById('backToTop15').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
});
}



  scrollToSection() {
    setTimeout(() => {
      const element = document.querySelector('.container2') as HTMLElement;
      const header = document.querySelector('.header-container') as HTMLElement | null;

      if (element) {
        const headerHeight = header ? header.clientHeight : 0;
        window.scrollTo({
          top: element.offsetTop - headerHeight - 180,
          behavior: 'smooth'
        });
      } else {
        console.error("Element '.container2' not found!");
      }
    }, 50);
  }

  steps = [
    {
      title: 'Upload <br> Your  Resume',
      description: 'Simply drag and drop your resume file (PDF or DOCX) to start.',
      image: 'https://storage.googleapis.com/a1aa/image/6uP9rJIqlGcdf2NMhlHIXi5y5LoGGHQcJJf7vuh0kZg.jpg'
    },
    {
      title: 'Add the Job <br> Description (JD)',
      description: `Paste or upload the <a href="#" class="text-blue-700 underline">job description</a> to let our AI match your skills.`,
      link: true,
      image: 'https://storage.googleapis.com/a1aa/image/5RhCpWZO5zJKO5TXXFnOimQsIBH-a9AMUXMlVctHpT8.jpg'
    },
    {
      title: 'Check  <br> Your  Score',
      description: 'Instantly get a resume score for free and actionable feedback.',
      image: 'https://storage.googleapis.com/a1aa/image/gGbrtWtB5F69KiK1YdBIRqlC2gujT0yYHHVU4F3KvkM.jpg'
    }
  ];

  currentStep = 1;
  canProceed = false;
  stepMessage = '';
  resumeUploaded = false;
  jdUploaded = false;
  bothFilesUploaded = false;
  selectedResumeFile: File | null = null;
  selectedJD: File | null = null;
  scanCompleted = false;

  // 👇 New separate variable for template preview
 // selectedTemplateResume: { title: string, image: string } | null = null;

  // File Upload
  onFileSelected(event: Event, fileType: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (fileType === 'resume') {
        this.selectedResumeFile = input.files[0];
        this.resumeUploaded = true;
        this.stepMessage = "Resume uploaded successfully! Now upload the Job Description.";
        this.currentStep = 2;
      } else if (fileType === 'jd') {
        this.selectedJD = input.files[0];
        this.jdUploaded = true;
        this.stepMessage = "";
      }

      this.bothFilesUploaded = this.resumeUploaded && this.jdUploaded;
      this.canProceed = !this.bothFilesUploaded;
    }
  }

  nextStep() {
    if (this.currentStep === 1 && this.resumeUploaded) {
      this.stepMessage = "Now upload the Job Description.";
      this.currentStep++;
    } else if (this.currentStep === 2 && this.jdUploaded) {
      this.stepMessage = "Job Description added successfully!";
      this.currentStep++;
      this.canProceed = false;
    }
  }

  goBack() {
    this.currentStep = 1;
    this.stepMessage = "Upload your resume again!";
    this.resumeUploaded = false;
    this.jdUploaded = false;
    this.scanCompleted = false;
    this.selectedResumeFile = null;
    this.selectedJD = null;
    this.bothFilesUploaded = false;
    this.canProceed = false;
  }

  scanResume() {
    this.stepMessage = "Scanning your resume...";
    this.currentStep = 3;

    setTimeout(() => {
      this.stepMessage = "Scan completed!";
      this.scanCompleted = true;
    }, 2000);
  }


  resumes = [
    {
      image: 'https://incruiter.blob.core.windows.net/frontend/frontend-website/assets/Head-of-HR.png',
      title: 'HR Head',
      fileUrl: 'assets/resumes/hr-head.pdf'
    },
    {
      image: 'https://incruiter.blob.core.windows.net/frontend/frontend-website/assets/Business-Analyst.png',
      title: 'Business Analyst',
      fileUrl: 'assets/resumes/business-analyst.pdf'
    },
    {
      image: 'https://incruiter.blob.core.windows.net/frontend/frontend-website/assets/Senior-product-manager.png',
      title: 'Product Manager',
      fileUrl: 'assets/resumes/product-manager.pdf'
    },
    {
      image: 'https://incruiter.blob.core.windows.net/frontend/frontend-website/assets/Senior-python.png',
      title: 'Python Developer',
      fileUrl: 'assets/resumes/product-manager.pdf'
    },
    {
      image: 'https://incruiter.blob.core.windows.net/frontend/frontend-website/assets/HR-specialist.png',
      title: 'HR Manager',
      fileUrl: 'assets/resumes/product-manager.pdf'
    },
    {
      image: 'https://incruiter.blob.core.windows.net/frontend/frontend-website/assets/React-FullStack-developer.png',
      title: 'React Full Stack Develper',
      fileUrl: 'assets/resumes/product-manager.pdf'
    },
    
  ];



  selectedTemplateResume: any = null;

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  openResume(resume: any) {
    this.selectedTemplateResume = resume;
  }

  closeResume() {
    this.selectedTemplateResume = null;
  }

  downloadResume() {
    if (this.selectedTemplateResume?.fileUrl) {
      const link = document.createElement('a');
      link.href = this.selectedTemplateResume.fileUrl;
      link.download = this.selectedTemplateResume.title + '.pdf';
      link.click();
    }
  }



 

 
  scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


}




