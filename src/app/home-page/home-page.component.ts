import { Component, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { IProgram } from '../../interfaces/IProgram';
import { IDirection } from '../../interfaces/IDirection';
import { ITrip } from '../../interfaces/ITrips';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  messageService: MessageService = inject(MessageService);

  programs: IProgram[] = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития...',
      icon: 'experienced-guide-icon'
    },
    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития...',
      icon: 'safe-hike-icon'
    },
    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития...',
      icon: 'loyal-prices-icon'
    }
  ];

  directions: IDirection[] = [
    {
      id: 1,
      image: 'lake-mountains',
      rating: '4.9',
      title: 'Озеро возле гор',
      description: 'романтическое приключение',
      price: 480,
      currency: '$'
    },
    {
      id: 2,
      image: 'night-mountains',
      rating: '4.5',
      title: 'Ночь в горах',
      description: 'в компании друзей',
      price: 500,
      currency: '$'
    },
    {
      id: 3,
      image: 'stretching-mountains',
      rating: '5.0',
      title: 'Растяжка в горах',
      description: 'для тех, кто заботится о себе',
      price: 230,
      currency: '$'
    }
  ];

  trips: ITrip[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития...',
      date: '01/04/2023',
      image: 'italy',
      link: 'читать статью'
    },
    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития...',
      date: '01/04/2023',
      image: 'airplane',
      link: 'читать статью'
    },
    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку?',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      image: 'narrow-street',
      link: 'читать статью'
    },
    {
      id: 4,
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: '01/04/2023',
      image: 'mosque-india',
      link: 'читать статью'
    }
  ];
}
