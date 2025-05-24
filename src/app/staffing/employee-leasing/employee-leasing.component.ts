import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-leasing',
  templateUrl: './employee-leasing.component.html',
  styleUrls: ['./employee-leasing.component.css']
})
export class EmployeeLeasingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
            // Scroll-to-Top Functionality
document.getElementById('backToTop6').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
});
   
  }

}
