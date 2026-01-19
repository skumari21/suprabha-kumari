import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  imports: [CommonModule, EducationComponent, ContactComponent]
})
export class WorkExperienceComponent {
  experiences = [
     {
      company: 'Infosys Finacle',
      role: 'Consultant',
      duration: 'May 25 — Present',
      responsibilities: [
        'Provide consulting support on payments and retail banking processes, helping clients optimize workflows and enhance customer experience.',
        'Contribute to internal methodology development and capability-building, promoting innovative approaches in payments and retail banking consulting.',
        'Conduct stakeholder workshops and knowledge sessions, bridging business and technology teams to align on solution strategy.',
        'Drive end-to-end documentation, including functional specifications, process flows, and business requirement documents for digital banking initiatives.'
      ]
    },
    {
      company: 'Infosys Limited',
      role: 'Technology Analyst (Full Stack Software Developer)',
      duration: 'Jun 22 — May 24',
      responsibilities: [
        'Led the integration of a CMS with a cache server, reducing CMS calls by over 99%.',
        'Redefined a solution for medical underwriting decisions impacting over 50,000 users.',
        'Led UX design upgrade across 95% of the application, integrating Google Analytics.',
        'Built a real-time alert system for payment failures, improving service efficiency.'
      ]
    },
    {
      company: 'Tata Consultancy Services',
      role: 'System Engineer',
      duration: 'Feb 19 — Jun 22',
      responsibilities: [
        'Worked on end-to-end application delivery with a defect rate under 10%.',
        'Integrated microservices to enhance user feedback flow and responsiveness.',
        'Enhanced cross-platform compatibility, increasing engagement by 25%.'
      ]
    }
  ];
}
