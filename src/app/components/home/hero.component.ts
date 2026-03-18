import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  personal: any;
  typedText = '';
  private phrases = ['Angular Developer', 'Frontend Engineer', 'UI Architect', 'RxJS Enthusiast'];
  private currentPhraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;

  constructor(private data: PortfolioDataService) {}

  ngOnInit() {
    this.personal = this.data.personal;
    this.typeEffect();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  typeEffect() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (this.isDeleting) {
      this.typedText = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.typedText = currentPhrase.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      this.timer = setTimeout(() => {
        this.isDeleting = true;
        this.typeEffect();
      }, 2000);
      return;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
    }

    const speed = this.isDeleting ? 60 : 100;
    this.timer = setTimeout(() => this.typeEffect(), speed);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
