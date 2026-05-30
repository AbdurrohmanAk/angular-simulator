import { Component } from '@angular/core';
import { IServiceLink } from '../../interfaces/IServiceLink';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  services:  IServiceLink[] = [
    {
      id: 'summer-mountain-hikes',
      title: 'Прогулки в горы летом'
    },
    {
      id: 'winter-hikes',
      title: 'Зимние походы в горы'
    },
    {
      id: 'visiting-temples',
      title: 'Посещение храмов в горах'
    },
    {
      id: 'extreme-sports',
      title: 'Экстремальные виды туризма'
    },
    {
      id: 'jungle-treks',
      title: 'Походы в джунглях Амазонии'
    },
    {
      id: 'trip-to-africa',
      title: 'Поездка в Африку'
    }
  ];

}
