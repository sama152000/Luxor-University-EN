import { Injectable } from '@angular/core';
import { Event } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private mockEvents: Event[] = [
    {
      id: 1,
      title: 'Luxor University Participates in Global Marathon to Raise Awareness Against Polio',
      description:
        'Under the patronage of Dr. Sabrin Abdel-Galil, President of Luxor University, the university participated this morning in the “Race to End Polio” marathon ',
      imageUrl:
        './assets/new1.jpg',
      date: new Date('2025-10-12'),
      type: 'event'
    },
    {
      id: 2,
      title: 'Awareness Seminar on the Dark Web and Digital Life at the Faculty of Fine Arts',
      description:
        'Under the patronage of Dr. Sabrin Abdel-Galil, President of Luxor University, the university participated this morning in the “Race to End Polio” marathon ',
      imageUrl:
        './assets/new2.jpg',
      date: new Date('2025-10-11'),
      type: 'event'
    },

  
    {
      id: 8,
      title: 'International Symposium on Digital Transformation in Education',
     description:
        'Under the patronage of Dr. Sabrin Abdel-Galil, President of Luxor University, the university participated this morning in the “Race to End Polio” marathon ',
      imageUrl:
        './assets/new3.jpg',
           date: new Date('2025-12-05'),
      type: 'conference'
    },
    {
      id: 9,
      title: 'Egyptology and Heritage Preservation Conference',
     description:
        'Under the patronage of Dr. Sabrin Abdel-Galil, President of Luxor University, the university participated this morning in the “Race to End Polio” marathon ',
      imageUrl:
        './assets/new4.jpg',
           date: new Date('2025-12-12'),
      type: 'conference'
    }
  ];

  getEvents(): Event[] {
    return this.mockEvents.filter(event => event.type === 'event');
  }

  getConferences(): Event[] {
    return this.mockEvents.filter(event => event.type === 'conference');
  }
}
