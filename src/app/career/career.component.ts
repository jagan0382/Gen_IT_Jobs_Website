import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
            // Scroll-to-Top Functionality
document.getElementById('backToTop3').addEventListener('click', function () {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
});
   
  }


         
                                   scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
      

}
