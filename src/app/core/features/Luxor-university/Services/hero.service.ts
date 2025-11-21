import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroData: Hero = {
    title: 'Welcome to Luxor University',
    subtitle: 'Excellence in Education and Research',
    backgroundImage: './assets/hero.background.gif'
  };

  getHeroData(): Observable<Hero> {
    return of(this.heroData);
  }
}
