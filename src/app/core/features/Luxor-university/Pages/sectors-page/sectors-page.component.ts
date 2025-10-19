import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../Shared/footer/footer.component';
import { PageHeaderComponent } from '../Shared/page-header/page-header.component';

@Component({
  selector: 'app-sectors-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent,PageHeaderComponent],
  templateUrl: './sectors-page.component.html',
  styleUrls: ['./sectors-page.component.css']
})
export class SectorsPageComponent {}
