import { Injectable } from '@angular/core';
import { PresidentMessage } from '../model/president-message.model';

@Injectable({
  providedIn: 'root'
})
export class PresidentMessageService {

  constructor() { }

  getPresidentMessage(): PresidentMessage {
    return {
      name: 'Prof. Sabrin Gaber Abdel Galil',
      title: 'University President',
      image: './assets/president.jpg',
      message: `I am pleased to welcome you to Luxor University, a distinguished educational institution that stands as a beacon of knowledge and enlightenment in Upper Egypt. We take pride in our deep-rooted history and rich cultural heritage that extends for thousands of years.

Luxor University strives for excellence in higher education and scientific research, preparing graduates who are qualified to compete in local, regional, and global job markets. We believe in developing students' skills and empowering them to become the leaders of tomorrow.`
    };
  }
}
