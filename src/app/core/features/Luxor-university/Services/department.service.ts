// src/app/core/services/department.service.ts
import { Injectable } from '@angular/core';
import { Department, HierarchyNode } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [
    {
      id: '1',
      name: 'Contracts Administration',
      slug: 'contracts-administration',
      director: 'Mr. Salah Abdel-Aaty Mohamed',
      team: ['Barakat Sobhy Ishaq', 'Samar Sayed Badawy'],
      responsibilities: [
        'Receive and review purchase requests and prepare proposal plans.',
        'Publish tenders on the public procurement portal.',
        'Manage supplier relations and contracts.',
        'Monitor supplier performance and ensure timely delivery.',
        'Handle electronic invoicing and record-keeping.',
        'Work within the Unified Procurement System.'
      ],
      vision: 'Utilize modern technology in purchasing and inventory systems. Train and qualify staff for professional excellence. Promote transparency, fairness, and competitive procurement.',
      mission: 'Secure all university needs efficiently and cost-effectively. Strengthen collaboration with other departments. Build an accessible internal database for contract management.',
      icon: 'pi pi-file-contract'
    },
    {
      id: '2',
      name: 'Public Relations and Media Administration',
      slug: 'public-relations-media',
      director: 'Dr. Ola Ali Ibrahim',
      team: ['Nermeen Mohamed', 'Hussein Abou El-Hamd', 'Ahmed Hafez', 'Asmaa Hamouda', 'Others'],
      responsibilities: [
        'Prepare press releases and official statements.',
        'Manage the university website and social media pages.',
        'Promote academic, research, and student activities.',
        'Supervise conferences, ceremonies, and graduation events.',
        'Publish internal updates and decisions.',
        'Launch awareness campaigns and social initiatives.',
        'Monitor media coverage and respond to misinformation.',
        'Develop communication strategies for emergency situations.'
      ],
      vision: 'Enhance the university\'s public image through effective media and community engagement.',
      mission: 'Foster strong relationships with stakeholders and promote the university\'s achievements.',
      icon: 'pi pi-megaphone'
    },
    {
      id: '3',
      name: 'Information Systems and Digital Transformation Administration',
      slug: 'information-systems-digital-transformation',
      director: 'Yasser Mohamed Khodary',
      team: ['Mahmoud Youssef', 'Shaimaa Sultan', 'Asmaa Sayed', 'Others'],
      responsibilities: [
        'Automate university information systems.',
        'Train staff on digital systems and tools.',
        'Manage and secure databases and the university’s website.',
        'Ensure cybersecurity compliance.'
      ],
      vision: 'Lead the digital transformation to create a smart university environment.',
      mission: 'Provide reliable information systems and support digital innovation across all departments.',
      subDepartments: [
        'Infrastructure and Information Security',
        'Statistics, Reports, and e-Publishing',
        'Systems, Applications, and Technical Support'
      ],
      icon: 'pi pi-database'
    },
    {
      id: '4',
      name: 'General Administration for University Libraries',
      slug: 'university-libraries',
      director: 'To be added', // Missing data - added placeholder
      team: ['Library Staff Team'], // Missing - added placeholder
      responsibilities: [
        'Oversee and develop libraries across all university faculties.',
        'Organize cataloging, indexing, and circulation processes.',
        'Provide digital databases for researchers.',
        'Support e-learning through digital library services.'
      ],
      vision: 'Create a world-class knowledge resource center for academic excellence.',
      mission: 'Facilitate access to information resources for students and researchers.',
      icon: 'pi pi-book'
    },
    {
      id: '5',
      name: 'Engineering Administration',
      slug: 'engineering-administration',
      director: 'To be added', // Missing - added placeholder
      team: ['Engineering Team'], // Missing - added placeholder
      responsibilities: [
        'Supervise infrastructure and construction projects.',
        'Monitor maintenance, utilities, and facility management.',
        'Design and execute new building projects.',
        'Ensure compliance with safety and quality standards.'
      ],
      vision: 'Build and maintain state-of-the-art facilities for a modern university.',
      mission: 'Provide safe and efficient infrastructure support for all university activities.',
      icon: 'pi pi-wrench'
    }
  ];

  private orgStructure: HierarchyNode = {
    name: 'Prof. Dr. Sabrin Gaber Abdel Galil',
    position: 'University President',
    children: [
      {
        name: 'Vice President for Education & Student Affairs',
        position: 'Vice President',
        children: [
          {
            name: 'Administration of Education & Student Affairs',
            position: 'Department',
            department: this.departments.find(d => d.slug === 'education-student-affairs') // Link if exists
          }
        ]
      },
      {
        name: 'Vice President for Postgraduate Studies & Research',
        position: 'Vice President',
        children: [
          {
            name: 'General Administration for Graduate Studies & Research',
            position: 'Department',
            department: this.departments.find(d => d.slug === 'graduate-studies-research')
          }
        ]
      },
      {
        name: 'Vice President for Community Service & Environmental Development',
        position: 'Vice President',
        children: [
          // Add relevant departments
        ]
      },
      {
        name: 'University Secretary-General',
        position: 'Secretary-General',
        children: this.departments.map(dep => ({
          name: dep.name,
          position: 'Department',
          department: dep
        }))
      }
    ]
  };

  getAllDepartments(): Department[] {
    return this.departments;
  }

  getDepartmentBySlug(slug: string): Department | undefined {
    return this.departments.find(d => d.slug === slug);
  }

  getOrgStructure(): HierarchyNode {
    return this.orgStructure;
  }
}