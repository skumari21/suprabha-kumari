import { Component } from '@angular/core';
import { SkillsProgressionComponent } from "../skills-progression/skills-progression.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [SkillsProgressionComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Executive communication', percent: 100, icon: 'assets/icons/data-dev.svg' },
    { name: 'Business Strategy & Consulting', percent: 75, icon: 'assets/icons/strategy.svg' },
    { name: 'Data-Driven Decision-Making', percent: 55, icon: 'assets/icons/product.svg' },
    { name: 'Product Management', percent: 75, icon: 'assets/icons/data-config.svg' },
    { name: 'Business Case Development', percent: 100, icon: 'assets/icons/data-analysis.svg' }
  ];
}
