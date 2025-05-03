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
    { name: 'Software Development', percent: 100, icon: 'assets/icons/data-dev.svg' },
    { name: 'Business Strategy & Consulting', percent: 75, icon: 'assets/icons/strategy.svg' },
    { name: 'Digital Transformation', percent: 55, icon: 'assets/icons/product.svg' },
    { name: 'Product Management', percent: 75, icon: 'assets/icons/data-config.svg' },
    { name: 'Data Analytics', percent: 100, icon: 'assets/icons/data-analysis.svg' }
  ];
}
