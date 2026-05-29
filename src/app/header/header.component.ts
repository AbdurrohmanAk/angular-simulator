import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { MessageType } from '../../enums/MessageType';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigation } from '../../interfaces/INavigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  messageService: MessageService = inject(MessageService);

  MessageType: typeof MessageType = MessageType;

  companyTitle: string = 'Румтибет';
  currentDate: string = '';
  counter: number = 0;
  showTimer: boolean = true;
  liveText: string = '';
  isLoading: boolean = true;
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';

  navigation: INavigation[] = [
    {
      title: 'Главная',
      link: '/'
    },
    {
      title: 'Пользователи',
      link: '/users'
    }
  ];

  constructor() {
    this.startTimer();
    this.stopLoader();
  }

  private startTimer(): void {
    setInterval(() => {
      this.currentDate = new Date().toLocaleString();
    }, 1000);
  }

  private stopLoader(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
