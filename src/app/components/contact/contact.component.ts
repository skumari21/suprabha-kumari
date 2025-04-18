import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;

  services: string[] = ['Consulting', 'Design', 'Development', 'Other'];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      service: [''],
      message: [''],
      anythingElse: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
