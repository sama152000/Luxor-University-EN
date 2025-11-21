import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Faculty } from '../model/faculties-programs.model';

@Injectable({
  providedIn: 'root'
})
export class FacultiesProgramsService {
  private faculties: Faculty[] = [
    {
      id: 2,
      name: 'Faculty of Archaeology',
      description: 'Exploring Egypt\'s ancient history with hands-on excavations near Luxor temples.',
      icon: 'pi pi-images',
      imageUrl: '/assets/logo1.png',
      programs: ['Egyptology', 'Archaeological Conservation', 'Museum Studies'],
      dean: 'Dr. Fatima Hassan',
      established: 1996
    },
    {
      id: 3,
      name: 'Faculty of Fine Arts',
      description: 'Fostering creativity in visual arts, inspired by Pharaonic and modern Egyptian aesthetics.',
      icon: 'pi pi-palette',
      imageUrl: '/assets/logo2.png',
      programs: ['Painting', 'Sculpture', 'Graphic Design'],
      dean: 'Prof. Ali Karim',
      established: 1996
    },
    {
      id: 4,
      name: 'Faculty of Alsun (Languages)',
      description: 'Mastering languages and translation, bridging cultures in the heart of ancient Egypt.',
      icon: 'pi pi-language',
      imageUrl: '/assets/logo5.png',
      programs: ['English', 'French', 'Translation Studies'],
      dean: 'Dr. Nadia Fouad',
      established: 1996
    },
    {
      id: 5,
      name: 'Faculty of Education',
      description: 'Preparing future educators with innovative teaching methods rooted in educational excellence.',
      icon: 'pi pi-book',
      imageUrl: '/assets/logo4.png',
      programs: ['Educational Sciences', 'Curriculum Development', 'Special Education'],
      dean: 'Prof. Khaled Mahmoud',
      established: 1996
    },
    {
      id: 7,
      name: 'Faculty of Medicine',
      description: 'Training healthcare professionals with modern medical facilities near Luxor\'s heritage sites.',
      icon: 'pi pi-heart',
      imageUrl: '/assets/logo3.png',
      programs: ['MBBS', 'Nursing', 'Public Health'],
      dean: 'Prof. Dr. Mariam Ali',
      established: 2020
    }
  ];

  getFaculties(): Observable<Faculty[]> {
    return of(this.faculties);
  }

  getFacultiesSlider(): Observable<{ id: number; imageUrl: string; title: string }[]> {
    const sliderData = this.faculties.map(faculty => ({
      id: faculty.id,
      imageUrl: faculty.imageUrl,
      title: faculty.name
    }));
    return of(sliderData);
  }
}
