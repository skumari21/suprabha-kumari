import { Component, Input, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'], 
})
export class CertificatesComponent {
  @Input() open = false;
  @Output() onClose = new EventEmitter<void>();

  showSlideshow = false;
  currentIndex = 0;

  
  certificates = [
    { thumbnail: 'assets/certs/markathon.jpg', full: 'assets/certs/markathon.jpg' },
    { thumbnail: 'assets/certs/ESG.jpg', full: 'assets/certs/ESG.jpg' },
    { thumbnail: 'assets/certs/EADA.jpg', full: 'assets/certs/EADA.jpg' },
    { thumbnail: 'assets/certs/salesforce.jpg', full: 'assets/certs/salesforce.jpg' },
    { thumbnail: 'assets/certs/GermanA1.jpg', full: 'assets/certs/GermanA1.jpg' },
    { thumbnail: 'assets/certs/GermanA2.jpg', full: 'assets/certs/GermanA2.jpg' },
    { thumbnail: 'assets/certs/Service_&_Commitment.jpg', full: 'assets/certs/Service_&_Commitment.jpg' },
    { thumbnail: 'assets/certs/Fresco_Play_Miles_Award.jpg', full: 'assets/certs/Fresco_Play_Miles_Award.jpg' },
    { thumbnail: 'assets/certs/On_the_Spot_(Team)_Award.jpg', full: 'assets/certs/On_the_Spot_(Team)_Award.jpg' },
    { thumbnail: 'assets/certs/On_the_Spot_Award.jpg', full: 'assets/certs/On_the_Spot_Award.jpg' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnChanges() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.open) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    }
  }

  close() {
    this.showSlideshow = false;
    this.currentIndex = 0;
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('modal-open');
    }
    this.onClose.emit();
  }

  openSlideshow(index: number) {
    this.currentIndex = index;
    this.showSlideshow = true;
  }

  closeSlideshow() {
    this.showSlideshow = false;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.certificates.length) % this.certificates.length;
  }
}