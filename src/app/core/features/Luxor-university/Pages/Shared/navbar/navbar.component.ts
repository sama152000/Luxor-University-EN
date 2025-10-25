import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
selector: 'app-navbar',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isScrolled = false;
isMenuOpen = false;
menuItems = [
{ label: 'Home', link: '/home' },
{ label: 'About the University', link: '/about' },
{ label: 'News', link: '/all-news' },
{ label: 'Departments', link: '/departments' },
{ label: 'Organizational Structure', link: '/org-structure' },
{ label: 'Faculties & Programs', link: '/faculties' },
{ label: 'Student Life', link: '/coming-soon' },
{ label: 'Sectors', link: '/sectors' },
{ label: 'Center list', link: '/Center-list' },
{ label: 'Contact Us', link: '/contact-us' }
];
toggleMenu() {
this.isMenuOpen = !this.isMenuOpen;
}
closeMenu() {
this.isMenuOpen = false;
}
@HostListener('window:scroll', [])
onWindowScroll() {
this.isScrolled = window.pageYOffset > 50;
}
@HostListener('window:resize')
onResize() {
if (window.innerWidth >= 992) {
this.isMenuOpen = false;
}
}
}