import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ScrollAnimateDirective } from '../../services/scroll-animate.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: any[] = [];
  certifications: any[] = [];

  constructor(private data: PortfolioDataService) {}

  ngOnInit() {
    this.education = this.data.education;
    this.certifications = this.data.certifications;
  }
}
