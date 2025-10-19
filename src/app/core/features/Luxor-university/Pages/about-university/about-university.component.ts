import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../Shared/page-header/page-header.component';
import { FooterComponent } from '../Shared/footer/footer.component';
import { VisionMissionService } from '../../Services/vision-mission.service';

interface Tab {
  id: string;
  title: string;
  icon: string;
  content: string | string[];
}

@Component({
  selector: 'app-about-university',
  standalone: true,
  imports: [CommonModule,PageHeaderComponent,FooterComponent],
  templateUrl: './about-university.component.html',
  styleUrls: ['./about-university.component.css']
})
export class AboutUniversityComponent implements OnInit {
  isVisible = false;
  activeTab = 'vision';
  tabs: Tab[] = [];

  constructor(private visionMissionService: VisionMissionService) {}

  get activeTabTitle(): string {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    return tab ? tab.title : '';
  }

  get activeTabContent(): string {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    return typeof tab?.content === 'string' ? tab.content : '';
  }

  get goals(): string[] {
    const tab = this.tabs.find(t => t.id === 'goals');
    return Array.isArray(tab?.content) ? tab.content : [];
  }

  ngOnInit() {
    this.tabs = [
      {
        id: 'vision',
        title: 'Our Vision',
        icon: 'pi pi-eye',
        content: this.visionMissionService.getVision()
      },
      {
        id: 'mission',
        title: 'Our Mission',
        icon: 'pi pi-flag',
        content: this.visionMissionService.getMission()
      },
      {
        id: 'goals',
        title: 'Our Goals',
        icon: 'pi pi-bullseye',
        content: this.visionMissionService.getGoals()
      },
      {
        id: 'history',
        title: 'Our History',
        icon: 'pi pi-history',
        content: this.visionMissionService.getHistory()
      }
    ];

    setTimeout(() => {
      this.isVisible = true;
    }, 200);
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}