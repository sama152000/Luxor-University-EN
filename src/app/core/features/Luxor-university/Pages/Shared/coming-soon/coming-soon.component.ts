import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule,PageHeaderComponent,FooterComponent],
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent {
  message = 'Coming Soon... Wait for Us!';

  ngOnInit() {
    // Optional: Add animation trigger
  }
}