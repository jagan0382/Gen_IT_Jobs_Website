import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0; // Keep track of active requests

  constructor(private spinner: NgxSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.spinner.show(); // Show spinner only if no requests are active
    }
    this.activeRequests++; // Increase request count

    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests--; // Decrease request count
        if (this.activeRequests === 0) {
          this.spinner.hide(); // Hide spinner only if no requests are pending
        }
      })
    );
  }
}
