import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageType } from '../../enums/MessageType';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: IMessage[] = [];

  addMessage(text: string, type: MessageType): void {
    const newMessage: IMessage = {
      id: Date.now(),
      text,
      type
    };

    this.messages = [newMessage, ...this.messages];

    setTimeout(() => {
      this.closeMessage(newMessage.id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(
      (message) => message.id !== id
    );
  }
}
