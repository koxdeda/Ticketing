import { Subjects, Publisher, OrderCancelledEvent } from '@kxticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
