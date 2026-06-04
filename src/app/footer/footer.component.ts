import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  services: string[] = [
  'Прогулки в горы летом',
  'Зимние походы в горы',
  'Посещение храмов в горах',
  'Экстремальные виды туризма',
  'Походы в джунглях Амазонии',
  'Поездка в Африку'
];

}
