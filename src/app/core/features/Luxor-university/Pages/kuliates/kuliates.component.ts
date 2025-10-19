import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../Shared/page-header/page-header.component';
import { FooterComponent } from '../Shared/footer/footer.component';

export interface Faculty {
  id: number;
  name: string;
  description: string;
  icon: string; // PrimeNG icon
  imageUrl: string; // صورة الكلية
  programs: string[];
  dean: string;
  established: number;
}

@Component({
  selector: 'app-kuliates',
  standalone: true,
  imports: [CommonModule, RouterModule,PageHeaderComponent,FooterComponent],
  templateUrl: './kuliates.component.html',
  styleUrls: ['./kuliates.component.css']
})
export class KuliatesComponent implements OnInit {
  faculties: Faculty[] = [
    // {
    //   id: 1,
    //   name: 'Faculty of Tourism and Hotels',
    //   description: 'Specializing in tourism management, hotel operations, and hospitality with focus on Luxor\'s heritage.',
    //   icon: 'pi pi-hotel',
    //   imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    //   programs: ['Tourism Management', 'Hotel Administration', 'Event Planning'],
    //   dean: 'Dr. Mohamed El-Sayed',
    //   established: 1996
    // },
    {
      id: 2,
      name: 'Faculty of Archaeology',
      description: 'Exploring Egypt\'s ancient history with hands-on excavations near Luxor temples.',
      icon: 'pi pi-images',
      imageUrl: './assets/logo1.png',
      programs: ['Egyptology', 'Archaeological Conservation', 'Museum Studies'],
      dean: 'Dr. Fatima Hassan',
      established: 1996
    },
    {
      id: 3,
      name: 'Faculty of Fine Arts',
      description: 'Fostering creativity in visual arts, inspired by Pharaonic and modern Egyptian aesthetics.',
      icon: 'pi pi-palette',
      imageUrl: './assets/logo2.png',
      programs: ['Painting', 'Sculpture', 'Graphic Design'],
      dean: 'Prof. Ali Karim',
      established: 1996
    },
    {
      id: 4,
      name: 'Faculty of Alsun (Languages)',
      // nameAr: 'كلية الألسن',
      description: 'Mastering languages and translation, bridging cultures in the heart of ancient Egypt.',
      icon: 'pi pi-language',
      imageUrl: './assets/logo5.png',
      programs: ['English', 'French', 'Translation Studies'],
      dean: 'Dr. Nadia Fouad',
      established: 1996
    },
    {
      id: 5,
      name: 'Faculty of Education',
      description: 'Preparing future educators with innovative teaching methods rooted in educational excellence.',
      icon: 'pi pi-book',
      imageUrl: './assets/logo4.png',
      programs: ['Educational Sciences', 'Curriculum Development', 'Special Education'],
      dean: 'Prof. Khaled Mahmoud',
      established: 1996
    },
    // {
    //   id: 6,
    //   name: 'Faculty of Computers & Information',
    //   description: 'Driving digital innovation with cutting-edge computing and AI programs.',
    //   icon: 'pi pi-laptop',
    //   imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    //   programs: ['Computer Science', 'Data Science', 'Cybersecurity'],
    //   dean: 'Dr. Omar Hassan',
    //   established: 2019
    // },
    {
      id: 7,
      name: 'Faculty of Medicine',
      description: 'Training healthcare professionals with modern medical facilities near Luxor\'s heritage sites.',
      icon: 'pi pi-heart',
      imageUrl: './assets/logo3.png',
      programs: ['MBBS', 'Nursing', 'Public Health'],
      dean: 'Prof. Dr. Mariam Ali',
      established: 2020
    },
    // {
    //   id: 8,
    //   name: 'Faculty of Sciences',
    //   description: 'Advancing scientific research in biology, chemistry, and physics with Pharaonic-inspired labs.',
    //   icon: 'pi pi-flask',
    //   imageUrl: 'https://images.unsplash.com/photo-1558618047-e20d52cc238b?w=400',
    //   programs: ['Biology', 'Chemistry', 'Physics'],
    //   dean: 'Dr. Youssef Salem',
    //   established: 2019
    // }
  ];

  ngOnInit() {
    // Optional: Add loading or animation
  }

  selectFaculty(faculty: Faculty) {
    // Navigate to faculty details
    console.log('Selected:', faculty.name);
  }
}