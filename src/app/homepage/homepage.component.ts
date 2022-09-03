import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from '../model/speaker.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  speakers: Speaker[] = [
    new Speaker(
      'Vin Lim',
      'Google Developer Expert, Web',
      '/assets/images/speakers/1.png'
    ),
    new Speaker(
      'Vin Lim',
      'Google Developer Expert, Web',
      '/assets/images/speakers/2.png'
    ),
    new Speaker(
      'Vin Lim',
      'Google Developer Expert, Web',
      '/assets/images/speakers/3.png'
    ),
    new Speaker(
      'Vin Lim',
      'Google Developer Expert, Web',
      '/assets/images/speakers/4.png'
    ),
  ];

  slides = [
    {
      img: '/assets/images/video-cover/2019.jpg',
      url: 'https://www.youtube.com/watch?v=lVduX_XAGhk',
    },
    {
      img: '/assets/images/video-cover/2018.jpg',
      url: 'https://www.youtube.com/watch?v=8zOCX8K7KOw',
    },
    {
      img: '/assets/images/video-cover/2017.jpg',
      url: 'https://www.youtube.com/watch?v=M8kH8-OcZaM',
    },
    {
      img: '/assets/images/video-cover/2016.jpg',
      url: 'https://www.youtube.com/watch?v=keWI-LxNFRk',
    },
    {
      img: '/assets/images/video-cover/2015.jpg',
      url: 'https://www.youtube.com/watch?v=8R3qJ1wWjzY',
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  slickModal: any;

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() {}

  ngOnInit() {}
}
