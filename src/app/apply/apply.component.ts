import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  jobId: number = 0;
  jobDetail: any;

  allJobs: any[] = [
    {
      id: 1,
      title: 'Desktop Engineer',
      designation: 'Desktop Support Engineer',
      location: 'Chennai',
      shift: 'Rotational, WFO',
      experience: '0-2 Years',
      skills: 'Hardware, Networking, Intune',
      postedDate: '09 April 2025',
      openings: 1,
      category: 'Open Systems',
      responsibilities: [
        'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
        'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
         'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
         'Troubleshoot and repair desktop issues.',
        'Basic knowledge of Intune and remote support.',
        'Update and close tickets using ticketing tool.',
        
        
      ]
    },
    {
      id: 2,
      title: 'Java Developer',
      designation: 'Backend Developer',
      location: 'Hyderabad',
      shift: 'Day Shift',
      experience: '2-5 Years',
      skills: 'Java, Spring Boot, REST APIs',
      postedDate: '08 April 2025',
      openings: 3,
      category: 'Software Development',
      responsibilities: [
        'Build REST APIs using Spring Boot.',
        'Collaborate with frontend developers.',
        'Write JUnit tests and perform code reviews.'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      designation: 'Angular Developer',
      location: 'Remote',
      shift: 'Flexible',
      experience: '1-4 Years',
      skills: 'Angular, TypeScript, HTML, CSS',
      postedDate: '07 April 2025',
      openings: 2,
      category: 'UI Development',
      responsibilities: [
        'Build responsive web applications.',
        'Work with RESTful APIs.',
        'Optimize UI performance.'
      ]
    },
    // Add entries from id: 4 to id: 20 similarly
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobDetail = this.allJobs.find(job => job.id === this.jobId);
  }
}
