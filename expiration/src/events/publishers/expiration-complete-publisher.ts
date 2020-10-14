import { Subjects, Publisher, ExpirationCompleteEvent } from "@kxticketing/common";


export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}