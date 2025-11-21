import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavbarItem } from '../model/navbar.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private navbarItems: NavbarItem[] = [
    { label: 'Home', link: '/home' },
    { label: 'About the University', link: '/about' },
    { label: 'News', link: '/all-news' },
    { label: 'Departments', link: '/departments' },
    { label: 'Organizational Structure', link: '/org-structure' },
    { label: 'Faculties & Programs', link: '/faculties' },
    { label: 'Student Life', link: '/student-life' },
    { label: 'Sectors', link: '/sectors' },
    { label: 'Center list', link: '/Center-list' },
    { label: 'Contact Us', link: '/contact-us' }
  ];

  getNavbarItems(): Observable<NavbarItem[]> {
    return of(this.navbarItems);
  }
}
