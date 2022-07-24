import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './interfaces/message';

export enum MessageType {
  Success,
  Error,
}

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {
  private messageQueue = new Subject<Message>();
  onNewMessage = this.messageQueue.asObservable();

  constructor() { }

  notifyMessage(message: Message): void {
    this.messageQueue.next(message);
  }

  clear(): void {
    this.messageQueue.next(undefined);
  }
}
