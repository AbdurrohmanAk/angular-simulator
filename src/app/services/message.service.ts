import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageType } from '../../enums/MessageType';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: IMessage[] = [];
  private idCounter: number = 0;

  addMessage(text: string, type: MessageType): void {
    const newMessage: IMessage = {
      id: this.idCounter + 1,
      text: text,
      type: type
    };

    this.idCounter = this.idCounter + 1;

    this.messages = [newMessage, ...this.messages];

    setTimeout((): void => {
      this.closeMessage(newMessage.id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(
      (message: IMessage): boolean => message.id !== id
    );
  }

}
