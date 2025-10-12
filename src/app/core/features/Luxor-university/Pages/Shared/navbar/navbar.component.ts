import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;

  menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About the University', link: '#about' },
    { label: 'News', link: '#news' },
    { label: 'Faculties & Programs', link: '#faculties' },
    { label: 'Student Life', link: '#student-life' },
    { label: 'Sectors', link: '#sectors' },
    { label: 'Healthcare', link: '#healthcare' },
    { label: 'Contact Us', link: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}
