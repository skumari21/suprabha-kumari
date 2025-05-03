import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  download(): void{
    const suggestedFilename = 'resume.pdf';
    const link = document.createElement('a');
    link.href = '../../assets/suprabhakumari.pdf';
    link.style.display = 'none';
    if (suggestedFilename) {
      link.download = suggestedFilename;
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
