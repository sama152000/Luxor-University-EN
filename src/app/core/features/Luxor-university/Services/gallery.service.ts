import { Injectable } from '@angular/core';
import { GalleryItem } from '../model/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private mockGalleryItems: GalleryItem[] = [
    {
      id: 1,
      imageUrl: './assets/new1.jpg',
      title: 'Campus Main Building',
      description: 'Modern architecture meets Egyptian heritage'
    },
    {
      id: 2,
      imageUrl: './assets/new2.jpg',
      title: 'Student Activities',
      description: 'Vibrant student life at Luxor University'
    },
    {
      id: 3,
      imageUrl: './assets/new3.jpg',
      title: 'Research Lab',
      description: 'State-of-the-art research facilities'
    },
    {
      id: 4,
      imageUrl: './assets/president.jpg',
      title: 'Library',
      description: 'Modern digital and traditional resources'
    },
    {
      id: 5,
      imageUrl: './assets/new5.jpg',
      title: 'Graduation Ceremony',
      description: 'Celebrating academic excellence'
    },
    {
      id: 6,
      imageUrl: './assets/new6.jpg',
      title: 'International Partnerships',
      description: 'Global collaboration and exchange'
    },
    {
      id: 7,
      imageUrl: './assets/new7.jpg',
      title: 'Cultural Events',
      description: 'Preserving Egyptian traditions'
    },
    {
      id: 8,
      imageUrl: './assets/new8.jpg',
      title: 'Sports Facilities',
      description: 'Supporting student wellness'
    },
    {
      id: 9,
      imageUrl: './assets/new9.jpg',
      title: 'Engineering Workshop',
      description: 'Hands-on learning experience'
    },
    {
      id: 10,
      imageUrl: './assets/new2.jpg',
      title: 'Medical Training',
      description: 'Training future healthcare leaders'
    }
  ];

  getGalleryItems(): GalleryItem[] {
    return this.mockGalleryItems;
  }
}
