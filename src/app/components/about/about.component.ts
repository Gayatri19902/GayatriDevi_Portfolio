import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ScrollAnimateDirective } from '../../services/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  personal: any;
  stats: { label: string; value: string; icon: string; color: string }[] = [];

  constructor(private data: PortfolioDataService) {}

  ngOnInit() {
    this.personal = this.data.personal;
    this.stats = [
      { label: 'Years Experience', value: this.personal.yearsExperience, icon: '⚡', color: '#64dcb4' },
      { label: 'Components Built', value: this.personal.componentsBuilt, icon: '🧩', color: '#a78bfa' },
      { label: 'Figma to Code', value: this.personal.figmaConverted, icon: '🎨', color: '#f472b6' },
      { label: 'Projects Delivered', value: this.personal.projectsCompleted, icon: '🚀', color: '#fbbf24' }
    ];
  }
}
