import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
//import { ContactDetails } from '../models/contact-details.model';

@Component({
  selector: 'app-collabrate',
  templateUrl: './collabrate.component.html',
  styleUrls: ['./collabrate.component.css']
})
export class CollabrateComponent implements OnInit {

  

  showSuccessPopup = false;
   contactForm: FormGroup;
   successMessage: string = '';
   selectedFile: File | null = null;
   message: string = '';
 
 
   
 
   constructor(private fb: FormBuilder, private contactService: ContactService) {
     this.contactForm = this.fb.group({
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       companyName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Ensures only 10-digit phone number
       country: [''],
       requirement: ['', Validators.required]
     });
   }
 
   
   ngOnInit(): void {
             // Scroll-to-Top Functionality
 document.getElementById('backToTop4').addEventListener('click', function () {
   window.scrollTo({
       top: 0,
       behavior: 'smooth',
   });
 });
    
   }
 
   // formData = {
   //   firstName: '',
   //   lastName: '',
   //   companyName: '',
   //   email: '',
   //   phoneNumber: '',
   //   country: '',
   //   requirement: ''
   // };
 
 
 
  //  contact: Contact = {
  //    firstName: '',
  //    lastName: '',
  //    companyName: '',
  //    email: '',
  //    phoneNumber: '',
  //    country: '',
  //    requirement: '',
     
  //  };
 
 
 
 
 
  /* onSubmit() {
      
 
     if (this.contactForm.valid) {
       // Update the contact object with form values
       this.contact.firstName = this.contactForm.value.firstName;
       this.contact.lastName = this.contactForm.value.lastName;
       this.contact.email = this.contactForm.value.email;
       this.contact.phoneNumber = this.contactForm.value.phoneNumber;
       this.contact.companyName = this.contactForm.value.companyName;
       this.contact.country = this.contactForm.value.country;
       this.contact.requirement = this.contactForm.value.requirement;
       
   
       this.showSuccessPopup = true;
   
       this.contactService.submitContact(this.contact)
         .subscribe({
           next: response => {
             this.message = 'Contact submitted successfully!';
           },
           error: error => {
             this.message = 'Error submitting Contact: ' + error.message;
           }
         });
   
       // Reset the form after submission
       this.contactForm.reset();
   
       // Hide popup after 3 seconds
       setTimeout(() => {
         this.showSuccessPopup = false;
       }, 4000);
     } else {
       this.message = 'Please fill in all required fields.';
     }
   }
   onFileSelected(event: any) {
     this.selectedFile = event.target.files[0];
     console.log('Selected file:', this.selectedFile);
   }
 
   closePopup() {
     this.showSuccessPopup = false;
   }*/
 }
 

