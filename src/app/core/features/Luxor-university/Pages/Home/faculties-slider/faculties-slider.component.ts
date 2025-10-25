import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule, SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-faculties-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './faculties-slider.component.html',
  styleUrls: ['./faculties-slider.component.css']
})
export class FacultiesSliderComponent implements OnInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  isVisible = false;
  isMobile = false;

  slides = [
    {
      items: [
        { type: 'logo', imageUrl: './assets/logo1.png', title: 'Faculty of Arts' },
        { type: 'logo', imageUrl: './assets/logo2.png', title: 'Faculty of Engineering' },
        { type: 'pharaonic', imageUrl: './assets/middle.png', title: 'Pharaonic Symbol' },
        { type: 'logo', imageUrl: './assets/logo3.png', title: 'Faculty of Medicine' },
        { type: 'logo', imageUrl: './assets/logo5.png', title: 'Faculty of Science' }
      ]
    },
   
  ];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '40px', /* Larger gap for center image */
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: '30px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px'
        }
      }
    ]
  };

  ngOnInit() {
    this.checkMobile();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.faculties-slider-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);

    window.addEventListener('resize', () => {
      this.checkMobile();
    });
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  public pauseSlider() {
    if (this.slickModal) {
      this.slickModal.unslick();
    }
  }

  public resumeSlider() {
    if (this.slickModal) {
      this.slickModal.initSlick();
    }
  }
}