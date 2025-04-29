import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  imports: [ProjectCardComponent]
})
export class MyWorkComponent {
  ProjectCardComponent = ProjectCardComponent;

  ecovision = 'Participated in Ecovision, a national case competition by IIM Shillong, focused on crafting strategic recommendations for a company aiming to adopt sustainable packaging solutions. The challenge was to balance environmental impact with cost-effectiveness and brand positioning.';
  ecovisionProblemStatement = 'assets/projects/case-ecovision.pdf';
  projectLabel = 'Ecovision Problem Statement';
  ecovisionSolution = 'assets/projects/ecovision_submission_deck.pdf';
  solutionLabel = 'Ecovision Submission Deck';
  ecovisionRole = 'Consultant (Case Competition Participant)';
  ecovisionTools = 'Competitive Benchmarking, Packaging Lifecycle Analysis, Strategic Consulting, Slide Design';
  ecovisionOutcome = 'Presented a structured recommendation framework that highlighted both short-term wins and long-term transformation plans.';

  ebroRole = 'Strategy Consultant';
  ebroTools = ' Market Research, Pricing Models, Segmentation Analysis, Stakeholder Interviews, Microsoft Excel, PowerPoint';
  ebroOutcome = 'The GTM strategy deck was well-received by the EBRO team and used as a foundational input in their product launch and investor discussions.';
  ebroProblemStatement = '';
  ebroDescription = 'Contributed to the design of a comprehensive Go-To-Market (GTM) strategy for EBRO, a Spanish e-mobility brand launching its flagship electric delivery van. The goal was to define a clear entry and growth plan for the European market, targeting last-mile delivery fleets and eco-conscious B2B buyers.';
  ebroSolution = 'assets/projects/ebroSubmissionDeck.pptx';
  ebroSolutionLabel = 'Ebro Submission Deck';
  ebroProjectLabel = '';


  BPProjectLabel = '';
  BPProblemStatement = '';
  BPdesc = 'InsightLens is a conceptual SaaS solution designed to help project managers seamlessly gather, analyze, and translate customer feedback into actionable user stories. The tool bridges the gap between customer voice and product development by leveraging structured feedback loops and intelligent tagging mechanisms. It aims to reduce communication gaps, prioritize features based on user sentiment, and accelerate decision-making in agile environments.';
  BPSolutionLabel = 'InsightLens Business Plan Report';
  BPSolution = 'assets/projects/BusinessPlanReport.pdf';
  BPTechStack = 'Conceptual | UX Design | Agile Product Strategy';
  BPoutcome='InsightLens is a feedback intelligence platform designed for agile teams. It empowers project managers to make informed decisions by turning raw customer feedback into clear, prioritized user stories—bridging the gap between users and development with data-driven insights.';
  BPRole='Consultant';
}