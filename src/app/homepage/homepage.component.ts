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

  constructor() {}

  ngOnInit() {}
}
