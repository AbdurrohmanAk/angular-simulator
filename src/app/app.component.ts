import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  companyTitle: string = 'Румтибет';
  constructor() {
    this.saveDateLastVisit();
    this.saveVisitCount();
  }

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.RED, Color.GREEN, Color.BLUE];
    return primaryColors.includes(color);
  }

  saveDateLastVisit(): void {
    const currentDate: string = new Date().toISOString();
    localStorage.setItem('last-Visit', currentDate);
  }

  saveVisitCount(): void {
    let count: number = Number(localStorage.getItem('visit-Count')) || 0;
    count++;
    localStorage.setItem('visir-Count', count.toString());
  }

}
