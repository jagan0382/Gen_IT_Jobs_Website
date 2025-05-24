import { Component, OnInit } from '@angular/core';



declare var bootstrap: any;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

yourAction() {
throw new Error('Method not implemented.');
}
 
  isContactPopupActive: boolean = false; // State for toggling the contact pop-up
  // activeItem: string = 'home'; // default active menu, for example


  activeParent: string = '';
activeItem: string = '';




  isNavbarOpen = false;
  isStaffingOpen = false;
  isTrainingOpen = false;
  isFresherOpen = false;
  isResumeOpen = false;
  isFreelanceOpen = false;
  isTechOpen = false;
  isKnowledgeOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  handleMenuClick() {
    // Collapse the navbar when a link is clicked
    this.isNavbarOpen = false;

    // Close all open dropdowns
    this.isStaffingOpen = false;
    this.isTrainingOpen = false;
    this.isFresherOpen = false;
    this.isResumeOpen = false;
    this.isFreelanceOpen = false;
    this.isTechOpen = false;
    this.isKnowledgeOpen = false;
  }


   // Call this method on click with the unique key for each menu item
  // setActive(item: string) {
  //   this.activeItem = item;
  // }

  setActive(parent: string, item: string) {
  this.activeParent = parent;
  this.activeItem = item;
}



  toggleContactPopup() {
    this.isContactPopupActive = !this.isContactPopupActive;
  }

  closeContactPopup() {
    this.isContactPopupActive = false;
  }

  closeNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbar);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  }

  

}
