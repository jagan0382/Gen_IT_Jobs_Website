import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeLeasingComponent } from './staffing/employee-leasing/employee-leasing.component';
import { PermanentStaffingComponent } from './staffing/permanent-staffing/permanent-staffing.component';
import { TemporaryStaffingComponent } from './staffing/temporary-staffing/temporary-staffing.component';
import { ApplyingComponent } from './applying/applying.component';
import { CareerComponent } from './career/career.component';
//import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { InterviewComponent } from './freelancing/components/interview/interview.component';
//import { CollabrateComponent } from './collabrate/collabrate.component';
import { InterviewServiceComponent } from './interview-service/interview-service.component';
import { ResumeBuildingComponent } from './fresherpage/components/resume-building/resume-building.component';
import { ResumeCheckerComponent } from './fresherpage/components/resume-checker/resume-checker.component';
import { JobsComponent } from './freelancing/components/jobs/jobs.component';
import { ApplyComponent } from './apply/apply.component';
import { MentorshipComponent } from './freelancing/components/mentorship/mentorship.component';
import { CareerCoachComponent } from './training/components/career-coach/career-coach.component';
import { CorporateComponent } from './training/components/corporate/corporate.component';
import { IndividualComponent } from './training/components/individual/individual.component';
import { CareerGuidenceComponent } from './fresherpage/components/career-guidence/career-guidence.component';
import { HackathonComponent } from './fresherpage/components/hackathon/hackathon.component';
import { InternshipComponent } from './fresherpage/components/internship/internship.component';
import { ArticlesComponent } from './knowledgehub/components/articles/articles.component';
import { TechnicalBlogComponent } from './knowledgehub/components/technical-blog/technical-blog.component';
import { DiscussionForumsComponent } from './knowledgehub/components/discussion-forums/discussion-forums.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'temporary-staffing', component: TemporaryStaffingComponent },
  { path: 'permanent-staffing', component: PermanentStaffingComponent },
  { path: 'employee-leasing', component: EmployeeLeasingComponent },
  {path: 'career', component:CareerComponent} ,
  //{path: 'contact', component:ContactModalComponent},
  {path: 'applying',component:ApplyingComponent},
  {path: 'interviews', component:InterviewComponent},
  //{path: 'collabrate', component:CollabrateComponent},
  {path: 'interviewservice', component:InterviewServiceComponent},
  {path: 'resume-building', component:ResumeBuildingComponent},
  {path: 'resume-checker', component:ResumeCheckerComponent},
  {path: 'itjobs', component:JobsComponent},
  { path: 'apply/:id', component: ApplyComponent },
  {path: 'mentorships', component:MentorshipComponent},
  {path: 'career-coach', component:CareerCoachComponent},
  {path: 'corporate', component:CorporateComponent},
  {path: 'individual', component:IndividualComponent},
  {path: 'career-guidence', component:CareerGuidenceComponent},
  {path: 'hackathon', component:HackathonComponent},
  {path: 'internship' , component:InternshipComponent},
  {path: 'article', component:ArticlesComponent},
  {path:'technical', component:TechnicalBlogComponent},
  {path: 'discussion', component:DiscussionForumsComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    // { path: '**', redirectTo: '/home' }, // Wildcard route
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Scrolls to top on navigation
  anchorScrolling: 'enabled' // Enables anchor scrolling
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
