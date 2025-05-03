import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { MyWorkComponent } from "./components/my-work/my-work.component";
import { WorkExperienceComponent } from "./components/work-experience/work-experience.component";
import { CommonModule } from '@angular/common';
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, HeaderComponent, FooterComponent, AboutMeComponent, SkillsComponent, WorkExperienceComponent, MyWorkComponent, HeroComponent]
})
export class AppComponent {
  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}