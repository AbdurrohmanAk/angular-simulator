import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageType } from '../../enums/MessageType';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: IMessage[] = [];
  private idCounter = 0;

  addMessage(text: string, type: MessageType): void {
    const newMessage: IMessage = {
      id: ++this.idCounter,
      text,
      type
    };

    this.messages.unshift(newMessage);

    setTimeout(() => {
      this.closeMessage(newMessage.id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(
      message => message.id !== id
    );
  }

}
