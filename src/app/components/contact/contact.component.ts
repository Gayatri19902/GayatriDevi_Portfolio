import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../services/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  isSubmitting = false;
  submitted = false;

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;
    this.isSubmitting = true;
    // Simulate submission - replace with real service
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitted = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 1500);
  }
}
