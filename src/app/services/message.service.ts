import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageType } from '../../enums/MessageType';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: IMessage[] = [];

  private addMessage(
    text: string,
    type: MessageType
  ): void {

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

  showSuccess(text: string): void {
    this.addMessage(text, MessageType.SUCCESS);
  }

  showError(text: string): void {
    this.addMessage(text, MessageType.ERROR);
  }

  showWarn(text: string): void {
    this.addMessage(text, MessageType.WARNING);
  }

  showInfo(text: string): void {
    this.addMessage(text, MessageType.INFO);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(
      (message) => message.id !== id
    );
  }

}
