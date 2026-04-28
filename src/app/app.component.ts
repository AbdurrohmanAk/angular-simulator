import { Component } from '@angular/core';
import { IProgram } from '../interfaces/IProgram';
import { FormsModule } from '@angular/forms';
import { IDirection } from '../interfaces/IDirection';
import { ITrip } from '../interfaces/ITrips';
import { MessageType } from '../enums/MessageType';
import { MessageService } from './services/message.service';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgTemplateOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  messageService: MessageService;
  private storageService: StorageService;

  MessageType = MessageType;

  readonly companyTitle: string = 'Румтибет';
  currentDate: string = '';
  counter: number = 0;
  showTimer: boolean = true;
  liveText: string = '';
  isLoading: boolean = true;
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';

  programs: IProgram[] = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'experienced-guide-icon'
    },
    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'safe-hike-icon'
    },
    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'loyal-prices-icon'
    },
  ];

  directions: IDirection[] = [
    {
      id: 1,
      image: 'lake-mountains',
      rating: '4.9',
      title: 'Озеро возле гор',
      description: 'романтическое приключение',
      price: 480,
      currency: '$',
    },
    {
      id: 2,
      image: 'night-mountains',
      rating: '4.5',
      title: 'Ночь в горах',
      description: 'в компании друзей',
      price: 500,
      currency: '$',
    },
    {
      id: 3,
      image: 'stretching-mountains',
      rating: '5.0',
      title: 'Растяжка в горах',
      description: 'для тех, кто заботится о себе',
      price: 230,
      currency: '$',
    },
  ];

  trips: ITrip[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      image: 'italy',
      link: 'читать статью',
    },
    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
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

  constructor(
    messageService: MessageService,
    storageService: StorageService
  ) {
    this.messageService = messageService;
    this.storageService = storageService;

    this.saveDateLastVisit();
    this.saveVisitCount();

    setInterval(() => {
      this.currentDate = new Date().toLocaleString();
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  private saveDateLastVisit(): void {
    const currentDate: string = new Date().toISOString();
    localStorage.setItem('last-visit', currentDate);
  }

  private saveVisitCount(): void {
    let count: number = Number(localStorage.getItem('visit-count')) || 0;
    count++;
    localStorage.setItem('visit-count', count.toString());
  }

}
