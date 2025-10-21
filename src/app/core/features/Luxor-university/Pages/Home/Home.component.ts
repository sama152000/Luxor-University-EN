import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../Shared/navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { ServicesCardsComponent } from "./services-cards/services-cards.component";
import { PresidentMessageComponent } from "./president-message/president-message.component";
import { FooterComponent } from "../Shared/footer/footer.component";
// import { VisionMissionGoalsComponent } from "./vision-mission-goals/vision-mission-goals.component";
import { EventsConferencesComponent } from "./events-conferences/events-conferences.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { LatestNewsComponent } from "./latest-news/latest-news.component";
import { FacultiesSliderComponent } from "./faculties-slider/faculties-slider.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
  imports: [NavbarComponent, HeroComponent, ServicesCardsComponent, PresidentMessageComponent, FooterComponent, EventsConferencesComponent, GalleryComponent, LatestNewsComponent, FacultiesSliderComponent, StatisticsComponent, ContactUsComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
