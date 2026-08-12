import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageType } from '../../enums/MessageType';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private messagesSubject: BehaviorSubject<IMessage[]> =
   new BehaviorSubject<IMessage[]>([])

   messages$ = this.messagesSubject.asObservable();

  private addMessage(
    text: string,
    type: MessageType
  ): void {

    const newMessage: IMessage = {
      id: Date.now(),
      text,
      type
    };

    const currentMessages = this.messagesSubject.getValue();

    this.messagesSubject.next([
      newMessage,
      ...currentMessages
    ])

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
    const currentMessages = this.messagesSubject.getValue();
    const filteredMessages = currentMessages.filter(
      message => message.id !== id
    );
    this.messagesSubject.next(filteredMessages);
  }

}
