import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  id: string;
  title: string;
  content: string | string[];
}

@Component({
  selector: 'app-vision-mission-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-mission-goals.component.html',
  styleUrls: ['./vision-mission-goals.component.css']
})
export class VisionMissionGoalsComponent implements OnInit {
  isVisible = false;
  activeTab = 'vision';

  tabs: Tab[] = [
    { id: 'vision', title: 'Our Vision', content: `Luxor University aspires to be a leading regional university, globally recognized in higher education and scientific research, contributing to building a knowledge society and developing qualified human resources capable of competing locally, regionally, and globally while preserving Egypt's rich cultural and civilizational heritage.` },
    { id: 'mission', title: 'Our Mission', content: `Luxor University is committed to providing high-quality education, fostering innovative scientific research, and serving the community by preparing graduates equipped with practical and theoretical skills to excel in local, regional, and global job markets.` },
    { id: 'goals', title: 'Our Goals', content: [
      `Prepare scientifically and professionally qualified graduates capable of competing in local, regional, and global job markets, with a focus on developing practical and theoretical skills.`,
      `Enhance the level of scientific research and innovation at the university by supporting distinguished research projects and promoting international research collaboration.`,
      `Contribute to sustainable community development through educational and research initiatives that preserve cultural heritage and address societal needs.`
    ]}
  ];

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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.vision-mission-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}