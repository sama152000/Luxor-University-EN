import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule}from'@angular/forms';
interface ServiceCard {
  title: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-services-cards',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './services-cards.component.html',
  styleUrls: ['./services-cards.component.css']
})
export class ServicesCardsComponent implements OnInit {
  cards: ServiceCard[] = [
    {
      title: 'Student Services',
      icon: 'pi-user',
      color: 'primary'
    },
    {
      title: 'Postgraduate Services',
      icon: 'pi-graduation-cap',
      color: 'accent'
    },
    {
      title: 'Faculty Services',
      icon: 'pi-users',
      color: 'primary'
    },
    {
      title: 'Administrative Services',
      icon: 'pi-file',
      color: 'accent'
    }
  ];

  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 500);
  }
}
