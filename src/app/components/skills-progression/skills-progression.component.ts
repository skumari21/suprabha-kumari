import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-progression',
  imports: [CommonModule],
  templateUrl: './skills-progression.component.html',
  styleUrl: './skills-progression.component.scss'
})
export class SkillsProgressionComponent {
  @Input() percentage: number = 0;
  @Input() label: string = '';
  @Input() icon: string = '';
}
