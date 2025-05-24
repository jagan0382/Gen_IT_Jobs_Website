import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-temporary-staffing',
  templateUrl: './temporary-staffing.component.html',
  styleUrls: ['./temporary-staffing.component.css']
})
export class TemporaryStaffingComponent implements OnInit {

  

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
    
     
    



  activeDropdown: string | null = null;
  activeSubmenu: string | null = null;

  
  activeLink: string | null = 'home'; // Tracks the active main link
  

  // Set active link (called on click)
  setActiveLink(link: string): void {
    this.activeLink = link;
   this.activeSubmenu = null; // Reset submenu when main link change
   
  }

  // Set active submenu link
  setActiveSubmenu(submenu: string): void {
    this.activeSubmenu = submenu;
  }




  openMenu(menu: string): void {
    this.activeDropdown = menu;
  }

  closeMenu(menu: string): void {
    if (this.activeDropdown === menu) {
      this.activeDropdown = null;
    }
  }

  openSubMenu(submenu: string): void {
    this.activeSubmenu = submenu;
  }

  closeSubMenu(submenu: string): void {
    if (this.activeSubmenu === submenu) {
      this.activeSubmenu = null;
    }
  }



    
  scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


}
