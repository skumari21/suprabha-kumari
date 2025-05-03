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

  openCerts() {
    this.showCerts = true;
  }
  closeCerts() {
    this.showCerts = false;
  }
 
}