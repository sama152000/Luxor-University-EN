import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistic } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private statisticsData: Statistic[] = [
    { icon: 'pi pi-briefcase', number: 11, description: 'Staff' },
    { icon: 'pi pi-users', number: 1090, description: 'Faculty Members' },
    { icon: 'pi pi-graduation-cap', number: 32090, description: 'Undergraduate Students' },
    { icon: 'pi pi-book', number: 2090, description: 'Graduate Students' },
    { icon: 'pi pi-globe', number: 1201, description: 'International Students' }
  ];

  getStatistics(): Observable<Statistic[]> {
    return of(this.statisticsData);
  }
}
