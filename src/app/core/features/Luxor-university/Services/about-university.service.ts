import { Injectable } from '@angular/core';
import { AboutUniversity } from '../model/about-university.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUniversityService {

  constructor() { }

  getAboutUniversity(): AboutUniversity {
    return {
      vision: `Luxor University aspires to be a leading regional university, globally recognized in higher education and scientific research, contributing to building a knowledge society and developing qualified human resources capable of competing locally, regionally, and globally while preserving Egypt's rich cultural and civilizational heritage.`,
      mission: `Luxor University is committed to providing high-quality education, fostering innovative scientific research, and serving the community by preparing graduates equipped with practical and theoretical skills to excel in local, regional, and global job markets.`,
      goals: [
        `Prepare scientifically and professionally qualified graduates capable of competing in local, regional, and global job markets, with a focus on developing practical and theoretical skills.`,
        `Enhance the level of scientific research and innovation at the university by supporting distinguished research projects and promoting international research collaboration.`,
        `Contribute to sustainable community development through educational and research initiatives that preserve cultural heritage and address societal needs.`
      ],
      history: `Luxor University was established in 2019 as the first government university in the city of Luxor, named after the historic city that contains a third of the world's antiquities. The university aims to be a center of knowledge that bridges the rich past and the promising future.`
    };
  }
}
