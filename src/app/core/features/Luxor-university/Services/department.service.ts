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
    name: 'President of Luxor University',
    position: 'University President',
    children: [
      {
        name: 'Office of the University President',
        position: 'Department',
        children: [
          {
            name: 'Executive Advisors: Dr. Khamis El-Duraidi',
            position: 'Advisor'
          },
          {
            name: 'Information Systems & Digital Transformation',
            position: 'Department'
          },
          {
            name: 'Computing & Information',
            position: 'Department'
          },
          {
            name: 'Support, Development & Training',
            position: 'Department'
          },
          {
            name: 'Citations, Libraries & Digital Repositories',
            position: 'Department'
          },
          {
            name: 'Networks, Servers & Cybersecurity',
            position: 'Department'
          },
          {
            name: 'Public Relations',
            position: 'Department'
          },
          {
            name: 'Media & Translation',
            position: 'Department'
          },
          {
            name: 'Development & Quality Assurance',
            position: 'Department'
          },
          {
            name: 'Strategic Management',
            position: 'Department'
          },
          {
            name: 'Internal Monitoring & Auditing',
            position: 'Department'
          }
        ]
      },
      {
        name: 'Vice President for Education & Student Affairs',
        position: 'Vice President',
        children: [
          {
            name: 'Education Affairs',
            position: 'Department'
          },
          {
            name: 'Enrollment & Registration',
            position: 'Department'
          },
          {
            name: 'Student Activities',
            position: 'Department'
          },
          {
            name: 'University Housing',
            position: 'Department'
          },
          {
            name: 'Postgraduate Studies & Research',
            position: 'Department'
          },
          {
            name: 'Scientific Research',
            position: 'Department'
          },
          {
            name: 'University Libraries',
            position: 'Department'
          },
          {
            name: 'Academic Publishing',
            position: 'Department'
          },
          {
            name: 'Open & Blended Learning',
            position: 'Department',
            children: [
              {
                name: 'Blended Learning',
                position: 'Sub-Department'
              },
              {
                name: 'Open Education',
                position: 'Sub-Department'
              }
            ]
          },
          {
            name: 'Cultural & Scientific Relations',
            position: 'Department'
          },
          {
            name: 'Scholarships',
            position: 'Department'
          },
          {
            name: 'Secondments',
            position: 'Department'
          },
          {
            name: 'Cultural Agreements',
            position: 'Department'
          },
          {
            name: 'Community Service & Environmental Development',
            position: 'Department',
            children: [
              {
                name: 'Community Service',
                position: 'Sub-Department'
              },
              {
                name: 'Environmental Development',
                position: 'Sub-Department'
              },
              {
                name: 'Environmental Projects',
                position: 'Sub-Department'
              }
            ]
          }
        ]
      },
      {
        name: 'Vice President for Postgraduate Studies & Research',
        position: 'Vice President',
        children: [
          {
            name: 'Postgraduate Studies',
            position: 'Department'
          },
          {
            name: 'Faculty Affairs',
            position: 'Department'
          },
          {
            name: 'Research Affairs',
            position: 'Department'
          },
          {
            name: 'Scientific Research',
            position: 'Department'
          },
          {
            name: 'Applied Research',
            position: 'Department'
          },
          {
            name: 'Innovation & Invention',
            position: 'Department'
          },
          {
            name: 'Scientific Publishing & Documentation',
            position: 'Department'
          },
          {
            name: 'Scientific & Cultural Relations',
            position: 'Department'
          },
          {
            name: 'International Academic Relations',
            position: 'Department'
          },
          {
            name: 'Scholarships & Missions',
            position: 'Department'
          },
          {
            name: 'Conferences & Seminars',
            position: 'Department'
          }
        ]
      },
      {
        name: 'Vice President for Community Service & Environmental Development',
        position: 'Vice President',
        children: [
          {
            name: 'Community Service',
            position: 'Department',
            children: [
              {
                name: 'Internal Community Service',
                position: 'Sub-Department'
              },
              {
                name: 'External Community Service',
                position: 'Sub-Department'
              },
              {
                name: 'Social Initiatives',
                position: 'Sub-Department'
              }
            ]
          },
          {
            name: 'Environmental Development',
            position: 'Department',
            children: [
              {
                name: 'Sustainable Environmental Development',
                position: 'Sub-Department'
              },
              {
                name: 'Environmental Awareness Programs',
                position: 'Sub-Department'
              },
              {
                name: 'Green Projects & Initiatives',
                position: 'Sub-Department'
              },
              {
                name: 'Environmental Projects',
                position: 'Department',
                children: [
                  {
                    name: 'Research Projects',
                    position: 'Sub-Department'
                  },
                  {
                    name: 'Environmental Consultations',
                    position: 'Sub-Department'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'University Secretary General (Amin El-Gamea)',
        position: 'Secretary-General',
        children: [
          {
            name: 'University Council Secretariat & Legal Affairs',
            position: 'Department',
            children: [
              {
                name: 'University Council Secretariat',
                position: 'Sub-Department'
              },
              {
                name: 'Legal Affairs',
                position: 'Sub-Department'
              }
            ]
          },
          {
            name: 'Financial Affairs',
            position: 'Department',
            children: [
              {
                name: 'Accounts',
                position: 'Sub-Department'
              },
              {
                name: 'Procurement',
                position: 'Sub-Department'
              }
            ]
          },
          {
            name: 'Administrative Affairs',
            position: 'Department',
            children: [
              {
                name: 'Personnel Affairs',
                position: 'Sub-Department'
              },
              {
                name: 'General Services',
                position: 'Sub-Department'
              },
              {
                name: 'Payroll & Benefits',
                position: 'Sub-Department'
              }
            ]
          },
          {
            name: 'Engineering Administration',
            position: 'Department',
            children: [
              {
                name: 'Maintenance & Facilities',
                position: 'Sub-Department'
              },
              {
                name: 'Engineering Projects',
                position: 'Sub-Department'
              },
              {
                name: 'Urban Planning',
                position: 'Sub-Department'
              }
            ]
          },
          {
            name: 'Library Affairs',
            position: 'Department',
            children: [
              {
                name: 'Faculty Libraries',
                position: 'Sub-Department'
              },
              {
                name: 'Central Library',
                position: 'Sub-Department'
              },
              {
                name: 'Databases & Information Systems',
                position: 'Sub-Department'
              }
            ]
          },
          {
            name: 'Academic Affairs',
            position: 'Department',
            children: [
              {
                name: 'University Education',
                position: 'Sub-Department'
              },
              {
                name: 'Scheduling & Examinations',
                position: 'Sub-Department'
              }
            ]
          },
          {
            name: 'Assistant Secretaries (Deputy Secretaries)',
            position: 'Deputy Secretary',
            children: [
              {
                name: 'Administrative Affairs',
                position: 'Department',
                children: [
                  {
                    name: 'Personnel Affairs',
                    position: 'Sub-Department'
                  },
                  {
                    name: 'General Services',
                    position: 'Sub-Department'
                  },
                  {
                    name: 'Payroll & Benefits',
                    position: 'Sub-Department'
                  }
                ]
              },
              {
                name: 'Financial Affairs',
                position: 'Department',
                children: [
                  {
                    name: 'Accounts',
                    position: 'Sub-Department'
                  },
                  {
                    name: 'Procurement',
                    position: 'Sub-Department'
                  }
                ]
              },
              {
                name: 'Technical Affairs',
                position: 'Department',
                children: [
                  {
                    name: 'Engineering Projects',
                    position: 'Sub-Department'
                  },
                  {
                    name: 'Maintenance',
                    position: 'Sub-Department'
                  },
                  {
                    name: 'Transportation & Operations',
                    position: 'Sub-Department'
                  }
                ]
              }
            ]
          }
        ]
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