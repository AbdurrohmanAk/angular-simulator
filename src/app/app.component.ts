import { Component } from '@angular/core';
import './training';
import { IProgram } from '../interfaces/IProgram';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

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
      description:
      'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon:'experienced-guide-icon'
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

  constructor() {
    this.saveDateLastVisit();
    this.saveVisitCount();

    setInterval(() => {
      this.isLoading = false;
    }, 2000)
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

