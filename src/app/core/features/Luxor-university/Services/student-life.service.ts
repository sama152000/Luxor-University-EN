import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentLifeData, StudentLifeActivity, ActivityCategory } from '../model/student-life.model';

@Injectable({
  providedIn: 'root'
})
export class StudentLifeService {

  private categories: ActivityCategory[] = [
    { id: 'community', name: 'Community Service', icon: 'pi pi-heart-fill', color: '#DC143C' },
    { id: 'sports', name: 'Sports & Health', icon: 'pi pi-trophy', color: '#E49017' },
    { id: 'cultural', name: 'Cultural Events', icon: 'pi pi-palette', color: '#8B4513' },
    { id: 'academic', name: 'Academic & Awareness', icon: 'pi pi-graduation-cap', color: '#273075' },
    { id: 'digital', name: 'Digital Awareness', icon: 'pi pi-shield', color: '#4682B4' },
    { id: 'support', name: 'Student Support', icon: 'pi pi-users', color: '#2E8B57' }
  ];

  private activities: StudentLifeActivity[] = [
    {
      id: 'polio-marathon',
      title: 'Race to End Polio Marathon',
      description: 'Luxor University students participated in the global "Race to End Polio" marathon under the slogan "Sports in the Service of Humanity", raising awareness about polio vaccination with hundreds of participants along the Nile Corniche.',
      category: this.categories[1], // Sports & Health
      tags: ['Marathon', 'Health Awareness', 'Community Service', 'Global Campaign'],
      imageUrl: './assets/new1.jpg',
      location: 'Luxor Temple → Nile Corniche',
      schedule: 'January 12, 2025',
      contactInfo: {
        coordinator: 'Community Service Sector',
        email: 'community@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'dark-web-seminar',
      title: 'Dark Web & Digital Safety Seminar',
      description: 'An awareness seminar on the dangers of the Dark Web and safe digital practices, organized by the Faculty of Fine Arts in collaboration with the Digital Transformation Administration.',
      category: this.categories[4], // Digital Awareness
      tags: ['Cybersecurity', 'Digital Safety', 'Dark Web', 'Student Protection'],
      imageUrl: './assets/new2.jpg',
      location: 'Faculty of Fine Arts Auditorium',
      schedule: 'January 11, 2025',
      contactInfo: {
        coordinator: 'Dr. Hanaa Hamed',
        email: 'digital.security@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'expat-support',
      title: 'Psychological Support for Expat Students',
      description: 'Launch of the "Psychological Support for Expat Students" initiative with awareness seminars and counseling sessions for students living away from home.',
      category: this.categories[5], // Student Support
      tags: ['Mental Health', 'Student Welfare', 'Counseling', 'Expat Students'],
      imageUrl: './assets/new3.jpg',
      location: 'Female Dormitory - Tiba City',
      schedule: 'Ongoing Program',
      contactInfo: {
        coordinator: 'Dr. Hany Abdel-Fattah',
        email: 'counseling@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'unesco-celebration',
      title: 'Celebrating Dr. Khaled El-Anany as UNESCO Director-General',
      description: 'University celebration of Dr. Khaled El-Anany\'s historic election as UNESCO Director-General – the first Egyptian to hold this prestigious position.',
      category: this.categories[3], // Academic & Awareness
      tags: ['UNESCO', 'International Achievement', 'Cultural Heritage', 'Egyptian Pride'],
      imageUrl: './assets/new5.jpg',
      location: 'Main University Hall',
      schedule: 'January 8, 2025',
      contactInfo: {
        coordinator: 'University Presidency Office',
        email: 'president@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'luxor-temple-discovery',
      title: 'New Pharaonic Inscriptions Discovered at Luxor Temple',
      description: 'Luxor University archaeological mission uncovers rare Ramesses II-era inscriptions during excavations at Luxor Temple, revealing new details about the Opet Festival.',
      category: this.categories[2], // Cultural Events
      tags: ['Archaeology', 'Pharaonic Discovery', 'Luxor Temple', 'Ramesses II'],
      imageUrl: './assets/new7.jpg',
      location: 'Luxor Temple Eastern Wall',
      schedule: 'Ongoing Excavation',
      contactInfo: {
        coordinator: 'Dr. Ahmed Farouk',
        email: 'archaeology@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'blood-donation-drive',
      title: 'Monthly Blood Donation Campaign',
      description: 'Regular blood donation drives organized in collaboration with local hospitals to support patients and save lives in the Luxor community.',
      category: this.categories[0], // Community Service
      tags: ['Blood Donation', 'Health', 'Community Support', 'Volunteer'],
      imageUrl: './assets/new6.jpg',
      location: 'University Medical Center',
      schedule: 'First Thursday of Every Month',
      contactInfo: {
        coordinator: 'Medical Services Unit',
        email: 'medical@luxor.edu.eg'
      },
      isActive: true,
      featured: false
    }
  ];

  private featuredActivities = this.activities.filter(a => a.featured);

  getStudentLifeData(): Observable<StudentLifeData> {
    return of({
      categories: this.categories,
      activities: this.activities,
      featuredActivities: this.featuredActivities
    });
  }

  getActivitiesByCategory(categoryId: string): Observable<StudentLifeActivity[]> {
    const filtered = this.activities.filter(
      activity => activity.category.id === categoryId && activity.isActive
    );
    return of(filtered);
  }

  getFeaturedActivities(): Observable<StudentLifeActivity[]> {
    return of(this.featuredActivities);
  }

  getActivityById(id: string): Observable<StudentLifeActivity | undefined> {
    const activity = this.activities.find(a => a.id === id);
    return of(activity);
  }

  getAllCategories(): Observable<ActivityCategory[]> {
    return of(this.categories);
  }
}