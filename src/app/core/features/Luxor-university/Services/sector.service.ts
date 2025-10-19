import { Injectable } from '@angular/core';
import { 
  Sector, 
  Department, 
  SectorStatistic, 
  SectorWithDetails 
} from '../model/sector.model';

// ✅ STATIC DATA - مبنية على المذكرة اللي بعتتيها
@Injectable({
  providedIn: 'root'
})
export class SectorService {
  
  // ✅ القطاعات الرئيسية (2 قطاعات من المذكرة)
  private sectors: Sector[] = [
    {
      id: '1',
      name: 'General Administration for Graduate Studies & Research',
      slug: 'graduate-studies-research',
      description: 'Responsible for managing all postgraduate programs, research activities, and academic services for Diploma, Master\'s, and PhD students.',
      overview: 'The General Administration for Graduate Studies & Research oversees all aspects of postgraduate education at Luxor University, ensuring high academic standards and research excellence.',
      mission: 'To provide exceptional educational and research opportunities for postgraduate students while maintaining administrative efficiency and academic integrity.',
      objectives: [
        'Streamline registration and academic processes for postgraduate students',
        'Facilitate research activities and thesis supervision',
        'Ensure fair evaluation and degree awarding procedures',
        'Provide comprehensive support services for graduate students',
        'Maintain accurate academic records and statistics'
      ],
      icon: 'pi pi-graduation-cap',
      image_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      display_order: 1,
      created_at: '2024-01-01'
    },
    {
      id: '2',
      name: 'Administration of Education & Student Affairs',
      slug: 'education-student-affairs',
      description: 'Manages undergraduate admissions, registration, examinations, and comprehensive student services across all faculties.',
      overview: 'The Administration of Education & Student Affairs serves as the primary point of contact for all undergraduate students, managing their academic journey from admission to graduation.',
      mission: 'To deliver efficient, student-centered educational services that ensure academic success and a supportive university experience.',
      objectives: [
        'Coordinate university-wide admissions and registration processes',
        'Organize and supervise examination procedures',
        'Provide comprehensive student support services',
        'Maintain accurate academic records and statistics',
        'Facilitate smooth transitions from admission to graduation'
      ],
      icon: 'pi pi-users',
      image_url: 'https://images.unsplash.com/photo-1524178232363-933d15b4d9e9?w=800',
      display_order: 2,
      created_at: '2024-01-01'
    }
  ];

  // ✅ الإدارات الفرعية للقطاع الأول (Graduate Studies)
  private departments: Department[] = [
    {
      id: '1',
      sector_id: '1',
      name: 'Registration & Enrollment Department',
      responsible_person: 'Mr. Mahmoud Khalil Ali',
      phone: '002-095-2287244',
      tasks: [
        'Student registration for Diploma, Master\'s, and PhD programs',
        'Research plan registration and approval',
        'Examination committee formation',
        'Degree awarding procedures',
        'Tuition fee reduction processing'
      ],
      display_order: 1,
      created_at: '2024-01-01'
    },
    {
      id: '2',
      sector_id: '1',
      name: 'Document & Certification Department',
      responsible_person: 'Mr. Mahmoud Khalil Ali',
      phone: '002-095-2287244',
      tasks: [
        'Issuing enrollment certificates (Arabic/English)',
        'Providing course content documentation',
        'Processing course equivalency requests',
        'Certification of laboratory courses for scholarship students',
        'Document authentication services'
      ],
      display_order: 2,
      created_at: '2024-01-01'
    }
  ];

  // ✅ الإدارات الفرعية للقطاع الثاني (Education & Students)
  private moreDepartments: Department[] = [
    {
      id: '3',
      sector_id: '2',
      name: 'Registration & Study Department',
      responsible_person: 'Mr. Mohamed Hussein Ahmed',
      phone: '01140116223',
      tasks: [
        'Preparing admission numbers for university faculties',
        'Reviewing student files and medical examinations',
        'Processing student transfers between departments',
        'Preparing academic schedules and calendars',
        'Maintaining student attendance records'
      ],
      display_order: 1,
      created_at: '2024-01-01'
    },
    {
      id: '4',
      sector_id: '2',
      name: 'Examinations Department',
      responsible_person: 'Mr. Mohamed Hussein Ahmed',
      phone: '01140116223',
      tasks: [
        'Reviewing examination schedules and timelines',
        'Coordinating examination committees',
        'Preparing daily examination statistics',
        'Processing examination excuse requests',
        'Reviewing and approving final results'
      ],
      display_order: 2,
      created_at: '2024-01-01'
    },
    {
      id: '5',
      sector_id: '2',
      name: 'Graduates & Certificates Department',
      responsible_person: 'Mr. Essa Ahmed Khalifa',
      phone: '01006553358',
      tasks: [
        'Preparing graduation statistics and certificates',
        'Reviewing and authenticating degree certificates',
        'Processing name correction requests',
        'Issuing permanent and replacement certificates',
        'Maintaining graduate records database'
      ],
      display_order: 3,
      created_at: '2024-01-01'
    },
    {
      id: '6',
      sector_id: '2',
      name: 'International Students Department',
      responsible_person: 'Mr. Salem Mohamed Abu Al-Wafa Salem',
      phone: '01014466444',
      tasks: [
        'Reviewing international student applications',
        'Verifying admission documents and security clearances',
        'Processing tuition payments for international students',
        'Maintaining international student statistics',
        'Coordinating with embassies and ministries'
      ],
      display_order: 4,
      created_at: '2024-01-01'
    }
  ];

  // ✅ الإحصائيات من المذكرة (2024/2025)
  private statistics: SectorStatistic[] = [
    // Graduate Studies Statistics
    {
      id: '1',
      sector_id: '1',
      category: 'Faculty of Tourism & Hotels',
      diploma: 225,
      masters: 24,
      phd: 7,
      total: 256,
      display_order: 1,
      created_at: '2024-01-01'
    },
    {
      id: '2',
      sector_id: '1',
      category: 'Faculty of Archaeology',
      diploma: 8,
      masters: 16,
      phd: 0,
      total: 24,
      display_order: 2,
      created_at: '2024-01-01'
    },
    {
      id: '3',
      sector_id: '1',
      category: 'Faculty of Fine Arts',
      diploma: 0,
      masters: 27,
      phd: 2,
      total: 29,
      display_order: 3,
      created_at: '2024-01-01'
    },
    {
      id: '4',
      sector_id: '1',
      category: 'Faculty of Alsun',
      diploma: 2,
      masters: 2,
      phd: 1,
      total: 5,
      display_order: 4,
      created_at: '2024-01-01'
    },
    {
      id: '5',
      sector_id: '1',
      category: 'Faculty of Education',
      diploma: 248,
      masters: 0,
      phd: 0,
      total: 248,
      display_order: 5,
      created_at: '2024-01-01'
    },
    {
      id: '6',
      sector_id: '1',
      category: 'Total',
      diploma: 483,
      masters: 69,
      phd: 10,
      total: 562,
      display_order: 6,
      created_at: '2024-01-01'
    }
  ];

  // ✅ METHODS - Static بدل Supabase
  async getAllSectors(): Promise<Sector[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.sectors;
  }

  async getSectorBySlug(slug: string): Promise<SectorWithDetails | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const sector = this.sectors.find(s => s.slug === slug);
    if (!sector) return null;

    const departments = [
      ...this.departments.filter(d => d.sector_id === sector.id),
      ...this.moreDepartments.filter(d => d.sector_id === sector.id)
    ];

    const sectorStats = this.statistics.filter(s => s.sector_id === sector.id);

    return {
      ...sector,
      departments,
      statistics: sectorStats
    };
  }

  async getDepartmentsBySectorId(sectorId: string): Promise<Department[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      ...this.departments.filter(d => d.sector_id === sectorId),
      ...this.moreDepartments.filter(d => d.sector_id === sectorId)
    ];
  }

  async getStatisticsBySectorId(sectorId: string): Promise<SectorStatistic[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.statistics.filter(s => s.sector_id === sectorId);
  }

  async getAdjacentSectors(currentSlug: string): Promise<{ previous: Sector | null; next: Sector | null }> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const sectors = await this.getAllSectors();
    const currentIndex = sectors.findIndex(s => s.slug === currentSlug);

    return {
      previous: currentIndex > 0 ? sectors[currentIndex - 1] : null,
      next: currentIndex < sectors.length - 1 ? sectors[currentIndex + 1] : null
    };
  }
}