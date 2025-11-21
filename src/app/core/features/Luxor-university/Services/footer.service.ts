import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FooterData } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footerData: FooterData = {
    universityInfo: {
      description: 'Luxor University is an academic institution committed to providing high-quality education and research.',
      slogan: 'From the heritage of our civilization, we shape the future.'
    },
    quickLinks: [
      { label: 'Home', link: '/home' },
      { label: 'About the University', link: '/about' },
      { label: 'Faculties & Programs', link: '/faculties' },
      { label: 'Student Life', link: '/student-life' },
      { label: 'Contact Us', link: '/contact-us' }
    ],
    importantLinks: [
      { label: 'org structure', link: '/org-structure' },
      { label: 'Departments', link: '/departments' },
      { label: 'Center list', link: '/Center-list' },
    ],
    contactInfo: {
      address: 'Luxor, Avenue of Sphinxes, Arab Republic of Egypt',
      phone: '+20 95 000 0000',
      email: 'info@luxoruniv.edu.eg'
    },
    socialLinks: [
      { icon: 'pi-facebook', link: 'https://www.facebook.com/LuxorUniversityOfficial/about?locale', label: 'Facebook' },
      { icon: 'pi-twitter', link: '#', label: 'Twitter' },
      { icon: 'pi-linkedin', link: '#', label: 'LinkedIn' },
      { icon: 'pi-youtube', link: '#', label: 'YouTube' }
    ]
  };

  getFooterData(): Observable<FooterData> {
    return of(this.footerData);
  }
}
