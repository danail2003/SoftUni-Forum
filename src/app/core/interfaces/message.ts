import { MessageType } from "../message-bus.service";

export interface Message {
    text: string,
    messageType: MessageType,
}
