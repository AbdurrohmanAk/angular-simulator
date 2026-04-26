import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageType } from '../../enums/MessageType';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages = signal<IMessage[]>([]);
  private idCounter = 0;

  readonly messages$ = this.messages.asReadonly();

  addMessage(text: string, type: MessageType): void {
    const newMessage: IMessage = {
      id: ++this.idCounter,
      text,
      type
    };

    this.messages.update(list => [newMessage, ...list]);
    setTimeout(() => {
      this.closeMessage(newMessage.id);
    }, 5000);
  }

  closeMessage(id: number): void {
      this.messages.update(list =>
        list.filter(message => message.id !==id)
      );
    }
}
