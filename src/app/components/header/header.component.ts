import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CertificatesComponent } from "../certificates/certificates.component";


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, CertificatesComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showContactModal = false;
  showCerts = false;
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  openContactModal() {
    this.showContactModal = true;
  }

  closeContactModal() {
    this.showContactModal = false;
  }

  toggleCerts() {
    this.showCerts = !this.showCerts;
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}