import { Injectable } from '@angular/core';
import { Center } from '../model/centers.model';

@Injectable({
  providedIn: 'root'
})
export class CentersService {
  private centers: Center[] = [
    {
      id: 'fine-arts',
      name: 'Center for Free Studies of Fine Arts',
      description: 'Encourages outstanding talents in arts like decoration, painting, graphic design, fashion, media, computer programs, and artistic crafts in sculpture.'
    },
    {
      id: 'design-media',
      name: 'Center for Design and Media',
      description: 'Supports societal and media roles by providing design services, professional courses, and practical training for graduate students in design and digital media.'
    },
    {
      id: 'cultural-heritage',
      name: 'Center for Cultural Heritage',
      description: 'Raises awareness about preserving cultural heritage, offers training courses, scientific consultations, and conducts research on heritage.'
    },
    {
      id: 'tourism-hospitality',
      name: 'Public Service Center for Tourism and Hospitality',
      description: 'Promotes tourism awareness, provides training in tourism and hospitality, and conducts specialized research.'
    },
    {
      id: 'it-consulting',
      name: 'Center for Computer and Information Technology Consulting',
      description: 'Integrates software technologies, offers training in IT, and provides technical consultations and database development.'
    },
    {
      id: 'carpentry',
      name: 'Carpentry and Furniture Manufacturing Unit',
      description: 'Supplies furniture and wooden products, achieves self-sufficiency, and provides consultations for carpentry designs.'
    },
    {
      id: 'digital-printing',
      name: 'Center for Digital Design, Printing, and Publishing',
      description: 'Offers printing and publishing services, conducts training, and supports high-quality research in the field.'
    },
    {
      id: 'laundry',
      name: 'Laundry Unit',
      description: 'Provides affordable laundry services for students, promoting hygiene and convenience.'
    },
    {
      id: 'psych-support',
      name: 'Psychological and Educational Support Center',
      description: 'Under activation.'
    },
    {
      id: 'project-management',
      name: 'Project Management Office',
      description: 'Under activation and regulation development.'
    },
    {
      id: 'career-development',
      name: 'Career Development Center',
      description: 'Promotes career awareness, trains facilitators, and offers consultations and training for employment skills.'
    },
    {
      id: 'measurement-evaluation',
      name: 'Measurement and Evaluation Center',
      description: 'Develops evaluation plans, offers training, and conducts research to enhance academic and administrative performance.'
    },
    {
      id: 'ict',
      name: 'Information and Communication Technology Center',
      description: 'Provides ICT services, training, and consultations using the latest technologies.'
    },
    {
      id: 'al-alsun',
      name: 'Al-Alsun Center for Languages and Translation',
      description: 'Offers language training, proofreading, translation, and linguistic consultations.'
    },
    {
      id: 'handicrafts',
      name: 'Center for Handicrafts and Small Industries Development',
      description: 'Supports traditional crafts, provides training, and conducts research for small enterprises.'
    },
    {
      id: 'bronze-foundry',
      name: 'Bronze and Furnaces Center',
      description: 'Provides bronze casting services, consultations, and training for students and graduates.'
    }
  ];

  getCenters(): Center[] {
    return this.centers;
  }

  getCenterById(id: string): Center | undefined {
    return this.centers.find(center => center.id === id);
  }
}