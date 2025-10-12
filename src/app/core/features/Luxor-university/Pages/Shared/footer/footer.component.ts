import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  link: string;
}

interface SocialLink {
  icon: string;
  link: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  universityInfo = {
    description: 'Luxor University is an academic institution committed to providing high-quality education and research.',
    slogan: 'From the heritage of our civilization, we shape the future.'
  };

  quickLinks: FooterLink[] = [
    { label: 'Home', link: '#home' },
    { label: 'About the University', link: '#about' },
    { label: 'Faculties & Programs', link: '#faculties' },
    { label: 'Student Life', link: '#student-life' },
    { label: 'Contact Us', link: '#contact' }
  ];

  importantLinks: FooterLink[] = [
    { label: 'University Council', link: '#council' },
    { label: 'Faculty Members', link: '#faculty' },
    { label: 'Postgraduate Studies', link: '#postgraduate' },
    { label: 'Administrative Affairs', link: '#administration' },
    { label: 'Academic Calendar', link: '#calendar' }
  ];

  contactInfo = {
    address: 'Luxor, Avenue of Sphinxes, Arab Republic of Egypt',
    phone: '+20 95 000 0000',
    email: 'info@luxoruniv.edu.eg'
  };

  socialLinks: SocialLink[] = [
    { icon: 'pi-facebook', link: '#', label: 'Facebook' },
    { icon: 'pi-twitter', link: '#', label: 'Twitter' },
    { icon: 'pi-linkedin', link: '#', label: 'LinkedIn' },
    { icon: 'pi-youtube', link: '#', label: 'YouTube' }
  ];
}
