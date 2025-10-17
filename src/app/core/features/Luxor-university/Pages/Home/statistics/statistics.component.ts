import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule}from'@angular/forms';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  isVisible = false;

  stats = [
    { icon: 'pi pi-briefcase', number: 11, description: 'Staff' },
    { icon: 'pi pi-users', number: 1090, description: 'Faculty Members' },
    { icon: 'pi pi-graduation-cap', number: 32090, description: 'Undergraduate Students' },
    { icon: 'pi pi-book', number: 2090, description: 'Graduate Students' },
    { icon: 'pi pi-globe', number: 1201, description: 'International Students' }
  ];

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.statistics-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}