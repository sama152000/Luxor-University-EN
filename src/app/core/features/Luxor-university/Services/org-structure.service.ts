import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrgNode, OrgStructureData } from '../model/org-structure.model';

@Injectable({
  providedIn: 'root'
})
export class OrgStructureService {

  private orgData: OrgNode = {
    id: 'president',
    label: 'University President',
    title: 'President of Luxor University',
    type: 'president',
    expanded: true,
    icon: 'pi pi-crown',
    children: [
      {
        id: 'president-office',
        label: 'Office of the University President',
        title: 'Office of the University President',
        type: 'department',
        icon: 'pi pi-briefcase',
        expanded: false,
        children: [
          {
            id: 'executive-advisors',
            label: 'Executive Advisors',
            title: 'Executive Advisors',
            name: 'Dr. Khamis El-Duraidi',
            type: 'unit',
            icon: 'pi pi-users'
          },
          {
            id: 'info-systems',
            label: 'Information Systems & Digital Transformation',
            title: 'Information Systems & Digital Transformation',
            type: 'unit',
            icon: 'pi pi-desktop',
            children: [
              { id: 'computing', label: 'Computing & Information', title: 'Computing & Information', type: 'unit', icon: 'pi pi-server' },
              { id: 'support-dev', label: 'Support, Development & Training', title: 'Support, Development & Training', type: 'unit', icon: 'pi pi-cog' },
              { id: 'citations', label: 'Citations, Libraries & Digital Repositories', title: 'Citations, Libraries & Digital Repositories', type: 'unit', icon: 'pi pi-book' },
              { id: 'networks', label: 'Networks, Servers & Cybersecurity', title: 'Networks, Servers & Cybersecurity', type: 'unit', icon: 'pi pi-shield' }
            ]
          },
          {
            id: 'public-relations',
            label: 'Public Relations',
            title: 'Public Relations',
            type: 'unit',
            icon: 'pi pi-comments',
            children: [
              { id: 'media', label: 'Media & Translation', title: 'Media & Translation', type: 'unit', icon: 'pi pi-megaphone' }
            ]
          },
          {
            id: 'quality',
            label: 'Development & Quality Assurance',
            title: 'Development & Quality Assurance',
            type: 'unit',
            icon: 'pi pi-check-circle',
            children: [
              { id: 'strategic', label: 'Strategic Management', title: 'Strategic Management', type: 'unit', icon: 'pi pi-chart-line' },
              { id: 'audit', label: 'Internal Monitoring & Auditing', title: 'Internal Monitoring & Auditing', type: 'unit', icon: 'pi pi-eye' }
            ]
          }
        ]
      },
      {
        id: 'vp-education',
        label: 'Vice President for Education & Student Affairs',
        title: 'Vice President for Education & Student Affairs',
        type: 'vice-president',
        icon: 'pi pi-user-edit',
        expanded: false,
        children: [
          {
            id: 'education-affairs',
            label: 'Education Affairs',
            title: 'Education Affairs',
            type: 'department',
            icon: 'pi pi-book',
            children: [
              { id: 'enrollment', label: 'Enrollment & Registration', title: 'Enrollment & Registration', type: 'unit', icon: 'pi pi-id-card' },
              { id: 'student-activities', label: 'Student Activities', title: 'Student Activities', type: 'unit', icon: 'pi pi-users' },
              { id: 'housing', label: 'University Housing', title: 'University Housing', type: 'unit', icon: 'pi pi-home' }
            ]
          },
          {
            id: 'postgrad-research',
            label: 'Postgraduate Studies & Research',
            title: 'Postgraduate Studies & Research',
            type: 'department',
            icon: 'pi pi-graduation-cap',
            children: [
              { id: 'research', label: 'Scientific Research', title: 'Scientific Research', type: 'unit', icon: 'pi pi-search' },
              { id: 'libraries', label: 'University Libraries', title: 'University Libraries', type: 'unit', icon: 'pi pi-book' },
              { id: 'publishing', label: 'Academic Publishing', title: 'Academic Publishing', type: 'unit', icon: 'pi pi-file' }
            ]
          },
          {
            id: 'open-learning',
            label: 'Open & Blended Learning',
            title: 'Open & Blended Learning',
            type: 'department',
            icon: 'pi pi-wifi',
            children: [
              { id: 'blended', label: 'Blended Learning', title: 'Blended Learning', type: 'unit', icon: 'pi pi-desktop' },
              { id: 'open-ed', label: 'Open Education', title: 'Open Education', type: 'unit', icon: 'pi pi-globe' }
            ]
          },
          {
            id: 'cultural-relations',
            label: 'Cultural & Scientific Relations',
            title: 'Cultural & Scientific Relations',
            type: 'department',
            icon: 'pi pi-globe',
            children: [
              { id: 'scholarships', label: 'Scholarships', title: 'Scholarships', type: 'unit', icon: 'pi pi-money-bill' },
              { id: 'secondments', label: 'Secondments', title: 'Secondments', type: 'unit', icon: 'pi pi-send' },
              { id: 'agreements', label: 'Cultural Agreements', title: 'Cultural Agreements', type: 'unit', icon: 'pi pi-file-edit' }
            ]
          },
          {
            id: 'community-service',
            label: 'Community Service & Environmental Development',
            title: 'Community Service & Environmental Development',
            type: 'department',
            icon: 'pi pi-heart',
            children: [
              { id: 'service', label: 'Community Service', title: 'Community Service', type: 'unit', icon: 'pi pi-users' },
              { id: 'env-dev', label: 'Environmental Development', title: 'Environmental Development', type: 'unit', icon: 'pi pi-sun' },
              { id: 'env-projects', label: 'Environmental Projects', title: 'Environmental Projects', type: 'unit', icon: 'pi pi-briefcase' }
            ]
          }
        ]
      },
      {
        id: 'vp-postgrad',
        label: 'Vice President for Postgraduate Studies & Research',
        title: 'Vice President for Postgraduate Studies & Research',
        type: 'vice-president',
        icon: 'pi pi-graduation-cap',
        expanded: false,
        children: [
          {
            id: 'postgrad-studies',
            label: 'Postgraduate Studies',
            title: 'Postgraduate Studies',
            type: 'department',
            icon: 'pi pi-book',
            children: [
              { id: 'faculty-affairs', label: 'Faculty Affairs', title: 'Faculty Affairs', type: 'unit', icon: 'pi pi-users' }
            ]
          },
          {
            id: 'research-affairs',
            label: 'Research Affairs',
            title: 'Research Affairs',
            type: 'department',
            icon: 'pi pi-search',
            children: [
              { id: 'scientific-research', label: 'Scientific Research', title: 'Scientific Research', type: 'unit', icon: 'pi pi-flask' },
              { id: 'applied-research', label: 'Applied Research', title: 'Applied Research', type: 'unit', icon: 'pi pi-sliders-h' },
              { id: 'innovation', label: 'Innovation & Invention', title: 'Innovation & Invention', type: 'unit', icon: 'pi pi-lightbulb' }
            ]
          },
          {
            id: 'scientific-publishing',
            label: 'Scientific Publishing & Documentation',
            title: 'Scientific Publishing & Documentation',
            type: 'department',
            icon: 'pi pi-file',
            children: []
          },
          {
            id: 'scientific-relations',
            label: 'Scientific & Cultural Relations',
            title: 'Scientific & Cultural Relations',
            type: 'department',
            icon: 'pi pi-globe',
            children: [
              { id: 'intl-relations', label: 'International Academic Relations', title: 'International Academic Relations', type: 'unit', icon: 'pi pi-flag' },
              { id: 'scholarships-missions', label: 'Scholarships & Missions', title: 'Scholarships & Missions', type: 'unit', icon: 'pi pi-send' },
              { id: 'conferences', label: 'Conferences & Seminars', title: 'Conferences & Seminars', type: 'unit', icon: 'pi pi-calendar' }
            ]
          }
        ]
      },
      {
        id: 'vp-community',
        label: 'Vice President for Community Service & Environmental Development',
        title: 'Vice President for Community Service & Environmental Development',
        type: 'vice-president',
        icon: 'pi pi-heart',
        expanded: false,
        children: [
          {
            id: 'community-service-dept',
            label: 'Community Service',
            title: 'Community Service',
            type: 'department',
            icon: 'pi pi-users',
            children: [
              { id: 'internal-service', label: 'Internal Community Service', title: 'Internal Community Service', type: 'unit', icon: 'pi pi-building' },
              { id: 'external-service', label: 'External Community Service', title: 'External Community Service', type: 'unit', icon: 'pi pi-sitemap' },
              { id: 'social-initiatives', label: 'Social Initiatives', title: 'Social Initiatives', type: 'unit', icon: 'pi pi-heart-fill' }
            ]
          },
          {
            id: 'env-development',
            label: 'Environmental Development',
            title: 'Environmental Development',
            type: 'department',
            icon: 'pi pi-sun',
            children: [
              { id: 'sustainable-dev', label: 'Sustainable Environmental Development', title: 'Sustainable Environmental Development', type: 'unit', icon: 'pi pi-refresh' },
              { id: 'awareness', label: 'Environmental Awareness Programs', title: 'Environmental Awareness Programs', type: 'unit', icon: 'pi pi-megaphone' },
              { id: 'green-projects', label: 'Green Projects & Initiatives', title: 'Green Projects & Initiatives', type: 'unit', icon: 'pi pi-sun' }
            ]
          },
          {
            id: 'env-projects-dept',
            label: 'Environmental Projects',
            title: 'Environmental Projects',
            type: 'department',
            icon: 'pi pi-briefcase',
            children: [
              { id: 'research-projects', label: 'Research Projects', title: 'Research Projects', type: 'unit', icon: 'pi pi-file' },
              { id: 'env-consultations', label: 'Environmental Consultations', title: 'Environmental Consultations', type: 'unit', icon: 'pi pi-comments' }
            ]
          }
        ]
      },
      {
        id: 'secretary-general',
        label: 'University Secretary General',
        title: 'University Secretary General (Amin El-Gamea)',
        type: 'secretary',
        icon: 'pi pi-briefcase',
        expanded: false,
        children: [
          {
            id: 'council-legal',
            label: 'University Council Secretariat & Legal Affairs',
            title: 'University Council Secretariat & Legal Affairs',
            type: 'department',
            icon: 'pi pi-book',
            children: [
              { id: 'council', label: 'University Council Secretariat', title: 'University Council Secretariat', type: 'unit', icon: 'pi pi-users' },
              { id: 'legal', label: 'Legal Affairs', title: 'Legal Affairs', type: 'unit', icon: 'pi pi-file' }
            ]
          },
          {
            id: 'financial-affairs',
            label: 'Financial Affairs',
            title: 'Financial Affairs',
            type: 'department',
            icon: 'pi pi-money-bill',
            children: [
              { id: 'accounts', label: 'Accounts', title: 'Accounts', type: 'unit', icon: 'pi pi-calculator' },
              { id: 'procurement', label: 'Procurement', title: 'Procurement', type: 'unit', icon: 'pi pi-shopping-cart' }
            ]
          },
          {
            id: 'admin-affairs',
            label: 'Administrative Affairs',
            title: 'Administrative Affairs',
            type: 'department',
            icon: 'pi pi-cog',
            children: [
              { id: 'personnel', label: 'Personnel Affairs', title: 'Personnel Affairs', type: 'unit', icon: 'pi pi-users' },
              { id: 'general-services', label: 'General Services', title: 'General Services', type: 'unit', icon: 'pi pi-th-large' },
              { id: 'payroll', label: 'Payroll & Benefits', title: 'Payroll & Benefits', type: 'unit', icon: 'pi pi-dollar' }
            ]
          },
          {
            id: 'engineering-affairs',
            label: 'Engineering Affairs',
            title: 'Engineering Affairs',
            type: 'department',
            icon: 'pi pi-wrench',
            children: [
              { id: 'maintenance', label: 'Maintenance & Facilities', title: 'Maintenance & Facilities', type: 'unit', icon: 'pi pi-cog' },
              { id: 'eng-projects', label: 'Engineering Projects', title: 'Engineering Projects', type: 'unit', icon: 'pi pi-building' },
              { id: 'urban-planning', label: 'Urban Planning', title: 'Urban Planning', type: 'unit', icon: 'pi pi-map' }
            ]
          },
          {
            id: 'library-affairs',
            label: 'Library Affairs',
            title: 'Library Affairs',
            type: 'department',
            icon: 'pi pi-book',
            children: [
              { id: 'faculty-libraries', label: 'Faculty Libraries', title: 'Faculty Libraries', type: 'unit', icon: 'pi pi-book' },
              { id: 'central-library', label: 'Central Library', title: 'Central Library', type: 'unit', icon: 'pi pi-home' },
              { id: 'databases', label: 'Databases & Information Systems', title: 'Databases & Information Systems', type: 'unit', icon: 'pi pi-database' }
            ]
          },
          {
            id: 'academic-affairs',
            label: 'Academic Affairs',
            title: 'Academic Affairs',
            type: 'department',
            icon: 'pi pi-graduation-cap',
            children: [
              { id: 'university-education', label: 'University Education', title: 'University Education', type: 'unit', icon: 'pi pi-book' },
              { id: 'scheduling', label: 'Scheduling & Examinations', title: 'Scheduling & Examinations', type: 'unit', icon: 'pi pi-calendar' }
            ]
          }
        ]
      }
    ]
  };

  getOrgStructure(): Observable<OrgStructureData> {
    return of({
      root: this.orgData,
      lastUpdated: new Date()
    });
  }

  searchNode(query: string, node: OrgNode = this.orgData): OrgNode[] {
    const results: OrgNode[] = [];

    if (node.label.toLowerCase().includes(query.toLowerCase()) ||
        node.title.toLowerCase().includes(query.toLowerCase()) ||
        (node.name && node.name.toLowerCase().includes(query.toLowerCase()))) {
      results.push(node);
    }

    if (node.children) {
      node.children.forEach(child => {
        results.push(...this.searchNode(query, child));
      });
    }

    return results;
  }

  expandNode(nodeId: string, node: OrgNode = this.orgData): boolean {
    if (node.id === nodeId) {
      node.expanded = true;
      return true;
    }

    if (node.children) {
      for (const child of node.children) {
        if (this.expandNode(nodeId, child)) {
          node.expanded = true;
          return true;
        }
      }
    }

    return false;
  }

  collapseAll(node: OrgNode = this.orgData): void {
    node.expanded = false;
    if (node.children) {
      node.children.forEach(child => this.collapseAll(child));
    }
  }

  expandAll(node: OrgNode = this.orgData): void {
    node.expanded = true;
    if (node.children) {
      node.children.forEach(child => this.expandAll(child));
    }
  }
}
