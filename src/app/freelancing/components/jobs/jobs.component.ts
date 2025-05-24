import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Job {
  id: number;
  title: string;
  location: string;
  experience: string;
  skill: string;  // We'll use this as "Job Category"
}




@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  // Search term for filtering via input
  searchTerm = '';
  // Toggle flag to show/hide filter box
  showFilter = false;

  // Filter selected values
  selectedLocation = '';
  selectedExperience = '';
  selectedJobCategory = '';

  // Dropdown options for filters
  locations: string[] = ['Bangalore', 'Chennai'];
  experiences: string[] = ['- years', '0-1 years', '2-3 years' ,'1-3 years', '3+ years'];
  jobCategories: string[] = ['DBMS', 'Microsoft Technologies', 'Open Systems', 'Bachelor\'s degree in HR, Business'];

  // Jobs array
  jobs: Job[] = [
    {
      id:1,
      title: 'Sr Automation Test Engineer - C#, Dotnet + Selenium',
      location: 'Bangalore',
      experience: '0-2 years',
      skill: 'DBMS'
    },
    {
      id:2,
      title: 'Software Developer- C# Dotnet',
      location: 'Bangalore',
      experience: '2-3 years',
      skill: 'Microsoft Technologies'
    },
    {
      id:3,
      title: 'Desktop Engineer',
      location: 'Chennai',
      experience: '2-3 years',
      skill: 'Open Systems'
    },
    {
      id:4,
      title: 'Recruitment Specialist',
      location: 'Bangalore',
      experience: '- years',
      skill: 'Bachelor\'s degree in HR, Business'
    },
    {
      id:5,
      title: 'Sr Automation Test Engineer - C#, Dotnet + Selenium',
      location: 'Bangalore',
      experience: '0-2 years',
      skill: 'DBMS'
    },
    {
      id:6,
      title: 'Software Developer- C# Dotnet',
      location: 'Bangalore',
      experience: '2-3 years',
      skill: 'Microsoft Technologies'
    },
    {
      id:7,
      title: 'Desktop Engineer',
      location: 'Chennai',
      experience: '0-1 years',
      skill: 'Open Systems'
    },
    {
      id:8,
      title: 'Recruitment Specialist',
      location: 'Bangalore',
      experience: '2-3 years',
      skill: 'Bachelor\'s degree in HR, Business'
    },
    {
      id:9,
      title: 'Sr Automation Test Engineer - C#, Dotnet + Selenium',
      location: 'Bangalore',
      experience: '0-2 years',
      skill: 'DBMS'
    },
    {
      id:10,
      title: 'Software Developer- C# Dotnet',
      location: 'Bangalore',
      experience: '2-3 years',
      skill: 'Microsoft Technologies'
    },
    {
      id:11,
      title: 'Desktop Engineer',
      location: 'Chennai',
      experience: '2-3 years',
      skill: 'Open Systems'
    },
    {
      id:12,
      title: 'Recruitment Specialist',
      location: 'Bangalore',
      experience: '0-3 years',
      skill: 'Bachelor\'s degree in HR, Business'
    },
    {
      id:13,
      title: 'Sr Automation Test Engineer - C#, Dotnet + Selenium',
      location: 'Bangalore',
      experience: '0-2 years',
      skill: 'DBMS'
    },
    {
      id:14,
      title: 'Software Developer- C# Dotnet',
      location: 'Bangalore',
      experience: '2-3 years',
      skill: 'Microsoft Technologies'
    },
    {
      id:15,
      title: 'Desktop Engineer',
      location: 'Chennai',
      experience: '2-3 years',
      skill: 'Open Systems'
    },
    {
      id:16,
      title: 'Recruitment Specialist',
      location: 'Bangalore',
      experience: '- years',
      skill: 'Bachelor\'s degree in HR, Business'
    },
    {
      id:17,
      title: 'Sr Automation Test Engineer - C#, Dotnet + Selenium',
      location: 'Bangalore',
      experience: '0-2 years',
      skill: 'DBMS'
    },
    {
      id:18,
      title: 'Software Developer- C# Dotnet',
      location: 'Bangalore',
      experience: '2-3 years',
      skill: 'Microsoft Technologies'
    },
    {
      id:19,
      title: 'Desktop Engineer',
      location: 'Chennai',
      experience: '2-3 years',
      skill: 'Open Systems'
    },
    {
      id:20,
      title: 'Recruitment Specialist',
      location: 'Bangalore',
      experience: '- years',
      skill: 'Bachelor\'s degree in HR, Business'
    },
  ];

 

  // Toggle filter display
  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  // Clear filter selections
  clearFilters() {
    this.selectedLocation = '';
    this.selectedExperience = '';
    this.selectedJobCategory = '';
  }

  // Filtered jobs based on search term and dropdown selections
  get filteredJobs(): Job[] {
    return this.jobs.filter(job => {
      // Check search term (if provided)
      const searchMatch = 
        !this.searchTerm.trim() ||
        job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.skill.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      // Check dropdown filters (if any is set, we filter by it)
      const locationMatch = !this.selectedLocation || job.location === this.selectedLocation;
      const experienceMatch = !this.selectedExperience || job.experience === this.selectedExperience;
      const categoryMatch = !this.selectedJobCategory || job.skill === this.selectedJobCategory;

      return searchMatch && locationMatch && experienceMatch && categoryMatch;
    });
  }




    ngOnInit(): void {

        // Scroll-to-Top Functionality
document.getElementById('backToTop30').addEventListener('click', function () {
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

     
    
}
