import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CentersService } from '../../../Services/centers.service';
import { Center } from '../../../model/centers.model';
import { ButtonModule } from 'primeng/button';
import { PageHeaderComponent } from "../../Shared/page-header/page-header.component";
import { FooterComponent } from "../../Shared/footer/footer.component";

@Component({
  selector: 'app-center-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, PageHeaderComponent, FooterComponent],
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.css']
})
export class CenterDetailsComponent implements OnInit {
  center: Center | undefined;
  currentIndex: number = 0;
  centers: Center[] = [];

  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'University Centers', url: '/Center-list' },
    { label: '', url: '' }
  ];

  constructor(
    private route: ActivatedRoute,
    private centersService: CentersService
  ) {}

  ngOnInit() {
    this.centers = this.centersService.getCenters();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.center = this.centersService.getCenterById(id);
        this.currentIndex = this.centers.findIndex(c => c.id === id);
        if (this.center) {
          this.breadcrumbs[2].label = this.center.name;
        }
      }
    });
    setTimeout(() => {
      document.querySelectorAll('.center-details').forEach(el => el.classList.add('visible'));
    }, 200);
  }

  getPreviousCenterId(): string | null {
    return this.currentIndex > 0 ? this.centers[this.currentIndex - 1].id : null;
  }

  getNextCenterId(): string | null {
    return this.currentIndex < this.centers.length - 1 ? this.centers[this.currentIndex + 1].id : null;
  }

  getServices(centerId: string): string[] {
    const servicesMap: { [key: string]: string[] } = {
      'fine-arts': ['Decoration', 'Painting', 'Graphic Design', 'Fashion', 'Media', 'Computer Programs', 'Sculpture'],
      'design-media': ['Design Services', 'Professional Courses', 'Practical Training', 'Digital Media'],
      'cultural-heritage': ['Training Courses', 'Scientific Consultations', 'Research on Heritage'],
      'tourism-hospitality': ['Tourism Awareness', 'Training in Tourism', 'Training in Hospitality', 'Specialized Research'],
      'it-consulting': ['Software Integration', 'IT Training', 'Technical Consultations', 'Database Development'],
      'carpentry': ['Furniture Supply', 'Wooden Products', 'Consultations for Carpentry Designs'],
      'digital-printing': ['Printing Services', 'Publishing Services', 'Training', 'Research in Printing'],
      'laundry': ['Laundry Services for Students'],
      'psych-support': ['Psychological Support', 'Educational Support'],
      'project-management': ['Project Management Services'],
      'career-development': ['Career Awareness', 'Training for Facilitators', 'Employment Skills Training'],
      'measurement-evaluation': ['Evaluation Plans', 'Training', 'Research for Performance Enhancement'],
      'ict': ['ICT Services', 'Training', 'Consultations'],
      'al-alsun': ['Language Training', 'Proofreading', 'Translation', 'Linguistic Consultations'],
      'handicrafts': ['Support for Traditional Crafts', 'Training', 'Research for Small Enterprises'],
      'bronze-foundry': ['Bronze Casting Services', 'Consultations', 'Training']
    };
    return servicesMap[centerId] || [];
  }
}
