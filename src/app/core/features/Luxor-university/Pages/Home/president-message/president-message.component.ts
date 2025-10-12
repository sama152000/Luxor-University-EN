import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-president-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './president-message.component.html',
  styleUrls: ['./president-message.component.css']
})
export class PresidentMessageComponent implements OnInit {
  isVisible = false;

  presidentData = {
    name: 'Prof. Sabrin Gaber Abdel Galil',
    title: 'University President',
    image: './assets/president.jpg',
    message: `I am pleased to welcome you to Luxor University, a distinguished educational institution that stands as a beacon of knowledge and enlightenment in Upper Egypt. We take pride in our deep-rooted history and rich cultural heritage that extends for thousands of years.

Luxor University strives for excellence in higher education and scientific research, preparing graduates who are qualified to compete in local, regional, and global job markets. We believe in developing students' skills and empowering them to become the leaders of tomorrow.`
  };

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.president-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}
