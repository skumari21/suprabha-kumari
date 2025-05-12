import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
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
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}


  refreshPage(): void {
    this.router.navigate(['/']).then(() => {
      this.document.location.reload(); // Use document.location for consistency
    });
  }
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