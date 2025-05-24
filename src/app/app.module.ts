import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoadingComponent } from './loading/loading.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { EmailService } from './email.service';
import { LoadingInterceptor } from './loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';

import { ApplyingComponent } from './applying/applying.component';

import { CareerComponent } from './career/career.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';

import { ServicesComponent } from './services/services.component';
import { EmployeeLeasingComponent } from './staffing/employee-leasing/employee-leasing.component';
import { PermanentStaffingComponent } from './staffing/permanent-staffing/permanent-staffing.component';
import { TemporaryStaffingComponent } from './staffing/temporary-staffing/temporary-staffing.component';
import { CareerGuidenceComponent } from './fresherpage/components/career-guidence/career-guidence.component';
import { HackathonComponent } from './fresherpage/components/hackathon/hackathon.component';
import { InternshipComponent } from './fresherpage/components/internship/internship.component';
import { ResumeBuildingComponent } from './fresherpage/components/resume-building/resume-building.component';
import { InterviewComponent } from './freelancing/components/interview/interview.component';
import { JobsComponent } from './freelancing/components/jobs/jobs.component';
import { MentorshipComponent } from './freelancing/components/mentorship/mentorship.component';
import { CollabrateComponent } from './collabrate/collabrate.component';
import { CorporateComponent } from './training/components/corporate/corporate.component';

import { AiMlComponent } from './training/components/technologies/ai-ml/ai-ml.component';
import { BusinessAnalystComponent } from './training/components/technologies/business-analyst/business-analyst.component';
import { CloudComponent } from './training/components/technologies/cloud/cloud.component';
import { DataEngineeringComponent } from './training/components/technologies/data-engineering/data-engineering.component';
import { DevopsComponent } from './training/components/technologies/devops/devops.component';
import { TestingComponent } from './training/components/technologies/testing/testing.component';
import { InterviewServiceComponent } from './interview-service/interview-service.component';
import { ResumeCheckerComponent } from './fresherpage/components/resume-checker/resume-checker.component';
import { ApplyComponent } from './apply/apply.component';
import { CareerCoachComponent } from './training/components/career-coach/career-coach.component';
import { IndividualComponent } from './training/components/individual/individual.component';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './knowledgehub/components/articles/articles.component';
import { TechnicalBlogComponent } from './knowledgehub/components/technical-blog/technical-blog.component';
import { DiscussionForumsComponent } from './knowledgehub/components/discussion-forums/discussion-forums.component';


// import { CareerCoachComponent } from './training/components/career-coach/career-coach.component';


//import Swiper from 'swiper';

//import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    ServicesComponent,
    FooterComponent,
    ContactModalComponent,
    TemporaryStaffingComponent,
    PermanentStaffingComponent,
    EmployeeLeasingComponent,
    HomeComponent,
    LoadingComponent,
    CareerComponent,
    ApplyingComponent,
    CareerGuidenceComponent,
    HackathonComponent,
    InternshipComponent,
    ResumeBuildingComponent,
    InterviewComponent,
    JobsComponent,
    MentorshipComponent,
    CollabrateComponent,
    CorporateComponent,
    AiMlComponent,
    BusinessAnalystComponent,
    CloudComponent,
    DataEngineeringComponent,
    DevopsComponent,
    TestingComponent,
    CollabrateComponent,
    InterviewServiceComponent,
    ResumeCheckerComponent,
    ApplyComponent,
    CareerCoachComponent,
    IndividualComponent,
    ArticlesComponent,
    TechnicalBlogComponent,
    DiscussionForumsComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxSpinnerModule,
    HttpClientModule, // Import HttpClientModule for API calls
    BrowserAnimationsModule, // Add this module
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    
    

    

  ],
  providers: [ EmailService, ContactService, { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
