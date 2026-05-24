import { Component, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  messageService: MessageService = inject(MessageService);
}
