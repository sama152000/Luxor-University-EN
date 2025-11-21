import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() title?: string;
  @Input() breadcrumbs: Array<{label: string, url?: string}> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateHeader(event.urlAfterRedirects);
      });

    // Initial load
    this.updateHeader(this.router.url);
  }

  private updateHeader(url: string) {
    const pageConfig = this.getPageConfig(url);
    if (!this.title) {
      this.title = pageConfig.title;
    }
    if (this.breadcrumbs.length === 0) {
      this.breadcrumbs = pageConfig.breadcrumbs;
    }
  }

  private getPageConfig(url: string): { title: string; breadcrumbs: Array<{label: string, url?: string}> } {
    const configMap: { [key: string]: any } = {
      '/': { title: 'Home', breadcrumbs: [] },
      '/home': { title: 'Home', breadcrumbs: [] },
      '/sectors': { title: 'University Sectors', breadcrumbs: [{label: 'Sectors', url: '/sectors'}] },
      '/sectors-overview': { title: 'Sectors Overview', breadcrumbs: [{label: 'Sectors', url: '/sectors'}] },
      '/sector-details/graduate-studies-research': {
        title: 'Graduate Studies & Research',
        breadcrumbs: [
          {label: 'Sectors', url: '/sectors'},
          {label: 'Graduate Studies', url: undefined}
        ]
      },
      '/sector-details/education-student-affairs': {
        title: 'Education & Student Affairs',
        breadcrumbs: [
          {label: 'Sectors', url: '/sectors'},
          {label: 'Education Affairs', url: undefined}
        ]
      },
      '/faculties': { title: 'Faculties & Programs', breadcrumbs: [{label: 'Faculties', url: '/faculties'}] },
      '/about': { title: 'About University', breadcrumbs: [{label: 'About', url: '/about'}] },
      '/news': { title: 'News & Announcements', breadcrumbs: [{label: 'News', url: '/news'}] },
      '/Departments': { title: 'Departments', breadcrumbs: [{label: 'Departments', url: '/Departments'}] },
      '/organizational-structure': { title: 'Organizational Structure', breadcrumbs: [{label: 'Organizational Structure', url: '/organizational-structure'}] },

      '/all-news': { title: 'Latest News & Updates', breadcrumbs: [{label: 'News', url: '/news'}, {label: 'All News', url: '/all-news'}] },
      '/student-life': { title: 'Student Life', breadcrumbs: [{label: 'Student Life', url: '/student-life'}] },
      '/healthcare': { title: 'Healthcare Services', breadcrumbs: [{label: 'Healthcare', url: '/healthcare'}] },
      '/contact-us': { title: 'Contact Us', breadcrumbs: [{label: 'Contact', url: '/contact-us'}] },
            '/OrganizationalStructure': { title: 'Organizational Structure', breadcrumbs: [{label: 'OrganizationalStructure', url: '/OrganizationalStructure'}] },
      '/Center-list': { title: 'University Centers', breadcrumbs: [{label: 'Centers'}] },

    };

    // Sector details dynamic
    if (url.includes('/sector-details/')) {
      const slug = url.split('/').pop();
      if (slug === 'graduate-studies-research') {
        return configMap['/sector-details/graduate-studies-research'];
      } else if (slug === 'education-student-affairs') {
        return configMap['/sector-details/education-student-affairs'];
      }
    }

    // News details dynamic
    if (url.includes('/news/') && url !== '/news') {
      return { title: 'News Details', breadcrumbs: [{label: 'News', url: '/news'}, {label: 'Details', url: undefined}] };
    }

    // Department details dynamic
    if (url.includes('/departments')) {
      return { title: 'University Departments', breadcrumbs: [{label: 'Departments', url: '/Departments'}] };
    }
 if (url.includes('/OrganizationalStructure')) {
      return { title: 'organizational structure', breadcrumbs: [{label: 'organizational-structure', url: '/OrganizationalStructure'}] };
    }

if (url.includes('/contact-us')) {
      return { title: 'Contact Us', breadcrumbs: [{label: 'Contact Us', url: '/contact-us'}] };
    }

    if (url.includes('/centers/:id/')) {
      return { title: 'centers/:id', breadcrumbs: [{label: 'centers ', url: '/centers/:id'}] };
    }
    return configMap[url] || { title: 'Luxor University', breadcrumbs: [] };
  }
}