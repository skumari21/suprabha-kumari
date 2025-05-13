import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [CommonModule]
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() problemStatement: string = '';
  @Input() solution: string = '';
  @Input() projectLabel: string = '';
  @Input() solutionLabel: string = '';
  @Input() role: string ='';
  @Input() outcome: string='';
  @Input() tools: string='';
}