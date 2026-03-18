import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Skill } from '../../services/portfolio-data.service';
import { ScrollAnimateDirective } from '../../services/scroll-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  tools = ['Postman', 'Swagger', 'GitHub', 'Bitbucket', 'Figma', 'VS Code', 'Karma', 'Jasmine', 'Lighthouse', 'Chrome DevTools', 'Angular CLI', 'npm/yarn', 'JWT Auth', 'Page Speed Insights'];

  constructor(private data: PortfolioDataService) { }

  ngOnInit() {
    this.skills = this.data.skills;
  }
}
