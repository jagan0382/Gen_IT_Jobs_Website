import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoadingService } from './loading.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prv';

  
  constructor(private router: Router, private spinner: NgxSpinnerService, public loadingService: LoadingService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinner.show(); // Show spinner when navigating
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(() => {
          this.spinner.hide(); // Hide spinner after navigation
        }, 1000);
      }
    });

    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        window.scrollTo(0,0)
      }
    })
  }

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe(loading => {
      if (loading) {
        this.spinner.show();
      } else {
        setTimeout(() => this.spinner.hide(), 1000);
      }
    });
  }




  

}
