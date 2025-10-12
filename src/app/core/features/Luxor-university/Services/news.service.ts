import { Injectable } from '@angular/core';
import { News } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private mockNews: News[] = [
    {
      id: 1,
      title: 'Luxor University Participates in Global Marathon to Raise Awareness Against Polio',
      description:
        'Under the patronage of Dr. Sabrin Abdel-Galil, President of Luxor University, the university participated this morning in the “Race to End Polio” marathon under the slogan “Sports in the Service of Humanity,” aiming to raise awareness about the importance of vaccination against polio. Hundreds of students, civil society representatives, and resident tourists joined the event.',
      imageUrl:
        './assets/new1.jpg',
      date: new Date('2025-10-12'),
      isFeatured: true
    },
    {
      id: 2,
      title: 'Awareness Seminar on the Dark Web and Digital Life at the Faculty of Fine Arts',
      description:
        'Under the patronage of Prof. Dr. Sabrin Abdel-Galil, President of Luxor University, the Community Service and Environmental Development Sector, supervised by Dr. Hanaa Hamed and in cooperation with the General Administration of Information Systems and Digital Transformation, organized a seminar on the “Dark Web and Digital Life” at the Faculty of Fine Arts, under the supervision of Dr. Ahmed Mohy, Dean of the Faculty.',
      imageUrl:
        './assets/new2.jpg',
      date: new Date('2025-10-11'),
      isFeatured: false
    },
    {
      id: 3,
      title: 'Luxor University Supports Expat Students Through Psychological Support Initiative',
      description:
        'Under the patronage of Prof. Dr. Sabrin Gaber Abdel-Galil, President of Luxor University, the Community Service and Environmental Development Sector launched the first activities of the “Psychological Support for Expat Students” initiative with an awareness seminar at the female student dormitory in Tiba City. The seminar was presented by Prof. Dr. Hany Abdel-Fattah, Director of the Psychological Support Office, and Assoc. Prof. Dr. Reda Atallah, University Community Outreach Coordinator, with the attendance of Dr. Ahmed Youssef, General Director of University Dormitories.',
      imageUrl:
        './assets/new3.jpg',
      date: new Date('2025-10-10'),
      isFeatured: false
    },
    {
      id: 4,
      title: 'Luxor University Mourns the Passing of the Esteemed Scholar Dr. Ahmed Omar Hashem',
      description:
        'Luxor University mourns with deep sorrow the passing of the distinguished scholar Dr. Ahmed Omar Hashem, former President of Al-Azhar University and member of the Senior Scholars Authority at Al-Azhar. Prof. Dr. Sabrin Abdel-Galil, President of Luxor University, extends heartfelt condolences to his family, students, and admirers, praying that God grants him mercy and eternal peace.',
      imageUrl:
        './assets/new4.jpg',
      date: new Date('2025-10-09'),
      isFeatured: false
    },
    {
      id: 5,
      title: 'Luxor University President Congratulates Dr. Khaled El-Anany on Winning UNESCO Director-General Post',
      description:
        'Prof. Dr. Sabrin Abdel-Galil, President of Luxor University, extends her warmest congratulations to Dr. Khaled El-Anany on his election as UNESCO Director-General, securing 55 out of 57 votes. She affirmed that this historic achievement adds to Egypt’s diplomatic and cultural record, reflecting the nation’s civilizational stature and the trust the world places in Egyptian excellence and leadership.',
      imageUrl:
        './assets/new5.jpg',
      date: new Date('2025-10-08'),
      isFeatured: false
    }
  ];

  getLatestNews(): News[] {
    return this.mockNews;
  }

  getFeaturedNews(): News | undefined {
    return this.mockNews.find(news => news.isFeatured);
  }
}
