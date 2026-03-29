import { Component } from '@angular/core';
import './training';
import { IProgram } from '../interfaces/IProgram';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  public readonly companyTitle: string = 'Румтибет';

  public currentDate: string = '';
  public counter: number = 0;
  public showTimer: boolean = true;
  public liveText: string = '';
  public isLoading: boolean = true;
  public selectedLocation: string = '';
  public selectedDate: string = '';
  public selectedParticipants: string = '';

  public programs: IProgram[] = [
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
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    setInterval(() => {
      this.currentDate = new Date().toLocaleString();
    }, 1000);
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  toggleView(): void {
    this.showTimer = !this.showTimer;
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

