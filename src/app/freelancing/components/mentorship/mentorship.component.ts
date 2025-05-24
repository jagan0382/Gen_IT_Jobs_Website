import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  
    constructor(private fb: FormBuilder) {
      this.demoForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        email: ['', [Validators.required, Validators.email]],
        primarySkills: ['', Validators.required],
        primaryExperience: ['0', [Validators.required, Validators.min(0)]],
        secondarySkills: ['', Validators.required],
        secondaryExperience: ['0', [Validators.required, Validators.min(0)]],
        coachExperience: ['', Validators.required],
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

  // userType: string = 'working';
  // dropdownOpen: boolean = false;

  // tags: string[] = [
  //   'Frontend Developer', 'Backend Developer', 'Fullstack Developer',
  //   'DevOps / SRE / Cloud Engineer', 'QA / Automation Testing Engineer',
  //   'Data Engineer / Big Data', 'Cybersecurity Engineer',
  //   'Engineering Manager', 'Data Scientist / AI/ML', 'Data Analyst',
  //   'Sales', 'Marketing', 'Business Analyst / Consultant',
  //   'Finance', 'Product Manager', 'Project / Program Manager'
  // ];

  // selectedTags: string[] = [];

  // dummyMentors = [
  //   {
  //     name: 'Nisha Malhotra',
  //     title: 'Senior Software Engineer',
  //     company: 'Microsoft',
  //     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  //     img: 'assets/mentor1.webp'
  //   },
  //   {
  //     name: 'Drishti Mamtani',
  //     title: 'Software Engineer L4',
  //     company: 'Google',
  //     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  //     img: 'assets/mentor2.webp'
  //   },
  //   {
  //     name: 'Sakshi Sharma',
  //     title: 'Software Engineer',
  //     company: 'Amazon',
  //     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  //     img: 'assets/mentor3.webp'
  //   },
  //   {
  //     name: 'Nisha Malhotra',
  //     title: 'Senior Software Engineer',
  //     company: 'Microsoft',
  //     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  //     img: 'assets/mentor1.webp'
  //   },
  //   {
  //     name: 'Drishti Mamtani',
  //     title: 'Software Engineer L4',
  //     company: 'Google',
  //     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  //     img: 'assets/mentor2.webp'
  //   },
  //   {
  //     name: 'Sakshi Sharma',
  //     title: 'Software Engineer',
  //     company: 'Amazon',
  //     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  //     img: 'assets/mentor3.webp'
  //   }
  // ];

  // selectUserType(type: string) {
  //   this.userType = type;
  // }

  // toggleDropdown() {
  //   this.dropdownOpen = !this.dropdownOpen;
  // }

  // toggleTag(tag: string) {
  //   if (this.selectedTags.includes(tag)) {
  //     this.selectedTags = this.selectedTags.filter(t => t !== tag);
  //   } else {
  //     this.selectedTags.push(tag);
  //   }
  // }

  // removeTag(tag: string, event: MouseEvent) {
  //   event.stopPropagation();
  //   this.selectedTags = this.selectedTags.filter(t => t !== tag);
  // }



    
  scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}





}
