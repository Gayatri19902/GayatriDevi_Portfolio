import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Experience } from '../../services/portfolio-data.service';
import { ScrollAnimateDirective } from '../../services/scroll-animate.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private data: PortfolioDataService) {}

  ngOnInit() {
    this.experiences = this.data.experiences;
  }
}
